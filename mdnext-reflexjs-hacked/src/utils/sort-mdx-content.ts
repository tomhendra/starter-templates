import * as R from 'ramda';
import { MdxBlogPost, MdxProject } from 'types';

export function sortMdxContent(
  content: Array<MdxBlogPost | MdxProject>,
  prop: string
): Array<MdxBlogPost | MdxProject> {
  const contentToSort = content;

  const sortByProperty = R.sortBy(R.prop(prop));

  return sortByProperty(contentToSort);
}
