import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import glob from 'fast-glob';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxContent } from '@types';
import { components } from '@components';

export async function getMdxContent(source: string): Promise<MdxContent[]> {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  const mdxContent = await Promise.all(
    files.map(async filepath => {
      const slug = filepath
        .replace(source, '') // remove content dir in path
        .replace(/^\/+/, '') // remove backslashes in path
        .replace(new RegExp(path.extname(filepath) + '$'), ''); // remove extension: /\.mdx$/
      // Read entire mdx file and save as string
      const mdxString = await fs.readFile(filepath);
      // Use gray-matter to parse content & metadata from mdxString data
      const { content, data } = matter(mdxString);
      // call renderToString with content & components to render it with
      const mdx = await renderToString(content, { components, scope: data });

      return {
        filepath, // for debugging
        slug,
        content, // for debugging
        mdx,
        data,
      };
    }),
  );

  return mdxContent;
}
