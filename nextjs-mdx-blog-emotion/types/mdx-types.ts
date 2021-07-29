import { MdxRemote } from 'next-mdx-remote/types';

export type MdxSource = MdxRemote.Source;
export type MdxComponents = MdxRemote.Components;

export interface PostData {
  title?: string;
  date?: string;
  excerpt?: string;
  author?: string;
  image?: string;
  caption?: string;
  tags?: string[];
}

export interface PostPreview extends PostData {
  slug: string;
}

export interface MdxContent {
  filepath: string;
  slug: string;
  content: string;
  mdx: MdxSource;
  data: PostData;
}
