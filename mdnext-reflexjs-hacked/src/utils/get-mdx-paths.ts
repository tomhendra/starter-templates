import path from 'path';
import glob from 'fast-glob';
import { MdxPath } from 'types';

export async function getMdxPaths(source: string): Promise<MdxPath[]> {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  return await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, '')
        .replace(/^\/+/, '')
        .replace(new RegExp(path.extname(filepath) + '$'), '');

      return {
        filepath,
        slug: slug === 'index' ? '' : slug,
      };
    })
  );
}
