/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import { CodeBlock, LinkedHeading, Bio } from '.';

export const MdxComponents = {
  Box,
  Bio,
  a: function A(props: any) {
    return <a {...props}>{props.children}</a>;
  },
  h1: function H1(props: any) {
    return <LinkedHeading is="h1" {...props} />;
  },
  h2: function H2(props: any) {
    return <LinkedHeading is="h2" {...props} />;
  },
  h3: function H3(props: any) {
    return <LinkedHeading is="h3" {...props} />;
  },
  h4: function H4(props: any) {
    return <LinkedHeading is="h4" {...props} />;
  },
  h5: function H5(props: any) {
    return <LinkedHeading is="h5" {...props} />;
  },
  h6: function H6(props: any) {
    return <LinkedHeading is="h6" {...props} />;
  },
  hr: function HR(props: any) {
    return <hr {...props} />;
  },
  p: function P(props: any) {
    return <p {...props} />;
  },
  ul: function UL(props: any) {
    return <ul {...props} />;
  },
  ol: function OL(props: any) {
    return <ol variant="list.ordered" {...props} />;
  },
  code: function Code(props: any) {
    return <CodeBlock {...props} />;
  },
  strong: function Strong(props: any) {
    return <strong {...props} />;
  },
  inlineCode: function InlineCode(props: any) {
    return <code color="primary" fontSize="xl" {...props} />;
  },
  table: function Table(props: any) {
    return (
      <table
        sx={{
          marginTop: 6,
          width: 'full',
          fontSize: 'sm',
          borderCollapse: 'collapse',
          'tr:hover': {
            bg: 'muted',
          },
          'td, th': {
            borderBottomWidth: 1,
            p: 2,
          },
          th: {
            textAlign: 'left',
            fontWeight: 'semibold',
            bg: 'muted',
          },
        }}
        {...props}
      />
    );
  },
};
