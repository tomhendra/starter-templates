import { promises as fs } from 'fs';
import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import hasha from 'hasha';

import { MdxBlogPost, MdxContent, MdxProject } from 'types';
import { MdxComponents } from '@components';
import config from '@config';
import { MdxCache, formatDate, getMdxPaths, sortMdxContent } from '@utils';

export async function getMdxContent(
  source: string,
  slugs?: string[],
  basePath?: string
): Promise<(MdxBlogPost | MdxProject)[]> {
  // get mdXPaths based on source, filter based on slugs.
  const mdxPaths = (await getMdxPaths(source)).filter((mdxPath) =>
    slugs ? slugs.includes(mdxPath.slug) : true
  );
  // or return empty array if no paths exist
  if (!mdxPaths.length) return [];

  // define mdxContent & await all promises to resolve
  const mdxContent = await Promise.all(
    // for each of the mdxPaths.................................................... >>
    mdxPaths.map(async function getDataBasedOnPath(mdxPath) {
      // use fs.readFile to get filepath and assign to raw
      const raw = await fs.readFile(mdxPath.filepath, 'utf-8');
      // pass filepath to hasha and assign to hash
      const hash = hasha(raw.toString());

      // use MdxCache to check cache for hashed content
      const cachedContent = MdxCache.get<MdxBlogPost | MdxProject>(hash);
      // if cachedContent matches hash i.e. the filepath already exists, return cached data
      if (cachedContent && cachedContent.hash === hash) {
        return cachedContent;
        // map iteration stops here if cachedContent exists........................ ??
      }

      // get content & data (frontmatter) from matter passing in path
      const { content, data } = matter(raw);
      // use next-mdx-remote renderToString function................... 00
      const mdx = await renderToString(content, {
        components: MdxComponents,
        mdxOptions: config.mdx.options,
        scope: data,
      });

      // define mdxContent object
      const mdxContent: MdxBlogPost | MdxProject = {
        ...mdxPath,
        url: `${basePath}/${mdxPath.slug}`,
        hash,
        content,
        readingTime: readingTime(content).text,
        mdx,
        data: {
          ...data,
          date: formatDate(data.date),
        },
      };

      // add mdxContent to MdxCache
      MdxCache.set<MdxBlogPost | MdxProject>(hash, mdxContent);

      // return mdxContent and end map iteration................................... !!
      return mdxContent;
    })
  );
  // sort MDX content by date (only posts / projects have date)
  return sortMdxContent(mdxContent, 'date');
}
