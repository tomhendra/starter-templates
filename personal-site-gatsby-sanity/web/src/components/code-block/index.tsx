import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import * as nord from './themes/nord';

// TODO: Dive into prism-react-renderer and really understand things.

const Pre = styled.pre(({ theme }) => ({
  borderRadius: theme.borderRadius.delta,
  margin: `${theme.spacings.foxtrot} 0`,
  padding: theme.spacings.echo,
  paddingBottom: theme.spacings.delta,
  textAlign: 'left',
  fontFamily: theme.fontStack.mono,
  fontSize: theme.text.charlie.fontSize,

  '& .token-line': {
    lineHeight: '1.3rem',
    height: '2.3rem',
  },
}));

const LineNo = styled.span(({ theme }) => ({
  display: 'inline-block',
  width: theme.spacings.echo,
  userSelect: 'none',
  opacity: '0.3',
}));

type Props = {
  code: string;
  language: Language;
};

export function CodeBlock({ code, language }: Props) {
  return (
    <Highlight {...defaultProps} theme={nord} code={code} language={language}>
      {function ({ className, style, tokens, getLineProps, getTokenProps }) {
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        );
      }}
    </Highlight>
  );
}

/*
 Types for language defined as what @sanity/code-input supports.
 If unsupported by prism-react-renderer, no syntax highlighting will be applied.
 eslint-disable-next-line max-len
 https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
    | 'batchfile' // not supported by prism-react-renderer
    | 'css'
    | 'groq' // not supported by prism-react-renderer
    | 'html' // not supported by prism-react-renderer - ??? - assume renders OK as markup
    | 'javascript'
    | 'json'
    | 'jsx'
    | 'markdown'
    | 'php' // not supported by prism-react-renderer
    | 'python'
    | 'sass'
    | 'scss'
    | 'sh' // defined as 'bash' by prism-react-renderer
    | 'text'; // not supported by prism-react-renderer (plaintext)
*/
