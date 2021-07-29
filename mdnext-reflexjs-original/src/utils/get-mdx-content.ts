import { promises as fs } from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import glob from 'fast-glob';
import hasha from 'hasha';

import { MdxPath, MdxContent } from 'types';
import { MdxComponents } from '@components';
import config from '@config';
import { MdxCache, formatDate } from '@utils';

export async function getMdxPaths(source: string): Promise<MdxPath[]> {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  return await Promise.all(
    files.map(async (filepath) => {
      let slug = filepath
        .replace(source, '')
        .replace(/^\/+/, '')
        .replace(new RegExp(path.extname(filepath) + '$'), '');

      return {
        filepath,
        slug: slug === 'index' ? '' : slug,
      };
    }),
  );
}

export async function getMdxContent(
  source: string,
  slugs?: string[],
  basePath?: string,
): Promise<MdxContent[]> {
  // get mdXPaths based on source, filter based on slugs.
  const mdxPaths = (await getMdxPaths(source)).filter((mdxPath) =>
    slugs ? slugs.includes(mdxPath.slug) : true,
  );
  // or return empty array if no paths exist
  if (!mdxPaths.length) return [];
  // define mdxContent & await all promises to resolve
  const mdxContent = await Promise.all(
    // for each of the mdxPaths.................................................... >>
    mdxPaths.map(async (mdxPath) => {
      // use fs.readFile to get filepath and assign to raw
      const raw = await fs.readFile(mdxPath.filepath, 'utf-8');
      // pass filepath to hasha and assign to hash
      const hash = hasha(raw.toString());
      // use MdxCache to check cache for hashed content
      const cachedContent = MdxCache.get<MdxContent>(hash);
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
      const mdxContent: MdxContent = {
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
      MdxCache.set<MdxContent>(hash, mdxContent);
      // return mdxContent and end map iteration................................... !!
      return mdxContent;
    }),
  );

  return mdxContent.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1;
    }
    if (a.data.date > b.data.date) {
      return -1;
    }
    return 0;
  });
}
