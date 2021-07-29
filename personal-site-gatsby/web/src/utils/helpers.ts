import { Block } from '../types';

export function toPlainText(blocks: Block[]): string {
  // https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
  return (
    blocks
      // loop through each block
      .map((block: Block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child: any) => child.text).join('');
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  );
}

// Capitalize first letter of string
export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
