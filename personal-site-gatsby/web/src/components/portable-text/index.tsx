/* eslint-disable react/display-name */
import BasePortableText from '@sanity/block-content-to-react';

import { Heading, Text, Figure, CodeBlock, InlineLink } from '..';

import {
  BodyPortableTextType,
  FigureType,
  CodeBlockType,
  ListItemType,
  LinkMark,
  Block,
} from '../../types';

const serializers = {
  types: {
    block: ({ node, children }: BodyPortableTextType) => {
      switch (node.style) {
        case 'h2':
          return (
            <Heading
              as="h2"
              variant="primary"
              css={theme => ({ marginTop: theme.spacings.hotel })}
            >
              {children}
            </Heading>
          );

        case 'h3':
          return (
            <Heading
              as="h3"
              variant="primary"
              css={theme => ({ marginTop: theme.spacings.hotel })}
            >
              {children}
            </Heading>
          );

        case 'h4':
          return (
            <Heading
              as="h4"
              variant="primary"
              css={theme => ({ marginTop: theme.spacings.echo })}
            >
              {children}
            </Heading>
          );

        case 'h5':
          return (
            <Heading
              as="h5"
              variant="primary"
              css={theme => ({ marginTop: theme.spacings.foxtrot })}
            >
              {children}
            </Heading>
          );

        case 'h6':
          return (
            <Heading
              as="h6"
              variant="primary"
              css={theme => ({ marginTop: theme.spacings.charlie })}
            >
              {children}
            </Heading>
          );

        case 'blockquote':
          return (
            <Text as="blockquote" variant="primary">
              {children}
            </Text>
          );

        default:
          return <Text variant="primary">{children}</Text>;
      }
    },
    figure: ({ node, children }: FigureType) => (
      <Figure node={node}>{children}</Figure>
    ),
    codeBlock: ({ node }: CodeBlockType) => (
      <CodeBlock code={node.code} language={node.language} />
    ),
  },
  listItem: ({ children }: ListItemType) => (
    <Text noSpacingBottom as="li" variant="primary">
      {children}
    </Text>
  ),
  marks: {
    link: ({ mark, children }: LinkMark) => {
      const { href } = mark;
      return <InlineLink externalLink={href}>{children}</InlineLink>;
    },
  },
};

const sanityConfig = require('../../../sanity-config');

type Props = {
  blocks: Block[];
};

export const PortableText = ({ blocks }: Props) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...sanityConfig}
  />
);
