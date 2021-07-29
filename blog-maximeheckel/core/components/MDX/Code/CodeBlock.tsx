import styled from '@emotion/styled';
import Highlight, {
  Prism,
  defaultProps,
  PrismTheme,
} from 'prism-react-renderer';
import { CopyToClipboardButton } from '../../Button';
import { useTheme } from '../../../context/ThemeContext';
import { CodeBlockProps } from './types';
import { prismDark, prismLight } from './styles';
import { calculateLinesToHighlight, hasTitle } from './utils';

// @ts-ignore
(typeof global !== 'undefined' ? global : window).Prism = Prism;

/**
 * This imports the syntax highlighting style for the Swift language
 */
require('prismjs/components/prism-swift');

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const { codeString, language, metastring } = props;

  const { dark } = useTheme();

  const baseTheme = dark ? prismDark : prismLight;

  const customTheme = {
    ...baseTheme,
    plain: {
      ...baseTheme.plain,
      fontFamily: 'Fira Code',
      fontSize: '14px',
    },
  } as PrismTheme;

  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const title = hasTitle(metastring);
  return (
    <CodeSnippetWrapper className="snippet">
      {title ? (
        <CodeSnippetHeader
          css={{
            backgroundColor: customTheme.plain.backgroundColor,
            borderBottom: `1px solid ${
              dark
                ? 'hsla(var(--palette-gray-90), 100%)'
                : 'hsla(var(--palette-gray-20), 100%)'
            }`,
          }}
        >
          <CodeSnippetTitle data-testid="codesnippet-title">
            {title}
          </CodeSnippetTitle>
          <CopyToClipboardButton text={codeString} />
        </CodeSnippetHeader>
      ) : null}
      <Highlight
        {...defaultProps}
        theme={customTheme}
        code={codeString}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <Pre title={title} className={className} style={style}>
              {tokens.map((line, index) => {
                const { className: lineClassName } = getLineProps({
                  className: shouldHighlightLine(index) ? 'highlight-line' : '',
                  key: index,
                  line,
                });

                return (
                  <Line
                    data-testid={
                      shouldHighlightLine(index) ? 'highlight-line' : 'line'
                    }
                    key={index}
                    className={lineClassName}
                  >
                    <LineNo data-testid="number-line">{index + 1}</LineNo>
                    <LineContent>
                      {line.map((token, key) => {
                        return (
                          <span
                            data-testid="content-line"
                            key={key}
                            {...getTokenProps({
                              key,
                              token,
                            })}
                          />
                        );
                      })}
                    </LineContent>
                  </Line>
                );
              })}
            </Pre>
          </>
        )}
      </Highlight>
    </CodeSnippetWrapper>
  );
};

export default CodeBlock;

const Pre = styled.pre<{ title?: string }>`
  text-align: left;
  padding: 8px 0px;
  overflow: auto;
  border-bottom-left-radius: var(--border-radius-2);
  border-bottom-right-radius: var(--border-radius-2);

  ${(p) =>
    p.title
      ? ''
      : `
      border-top-left-radius: var(--border-radius-2);
    border-top-right-radius: var(--border-radius-2);
    `}
`;

const Line = styled.div`
  display: table;
  border-collapse: collapse;
  padding: 0px 14px;
  border-left: 3px solid transparent;
  &.highlight-line {
    background: var(--maximeheckel-colors-emphasis);
    border-color: var(--maximeheckel-colors-brand);
  }

  &:hover {
    background-color: var(--maximeheckel-colors-emphasis);
  }
`;

const LineNo = styled.div`
  width: 45px;
  padding: 0 12px;
  user-select: none;
  opacity: 1;
  color: var(--maximeheckel-colors-typeface-2);
`;

const LineContent = styled.span`
  display: table-cell;
  width: 100%;
`;

const CodeSnippetTitle = styled('p')`
  font-size: 14px;
  margin-bottom: 0px;
  color: var(--maximeheckel-colors-typeface-2);
  font-weight: 500;
`;

const CodeSnippetHeader = styled('div')`
  @media (max-width: 500px) {
    border-radius: 0px;
    padding: 0px 8px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: var(--border-radius-2);
  border-top-right-radius: var(--border-radius-2);
  min-height: 45px;
  padding: 0px 14px;
`;

const CodeSnippetWrapper = styled('div')`
  @media (max-width: 750px) {
    /**
     * Make it fullbleed! 
     */
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
  width: 100%;
  border-radius: var(--border-radius-2);
  position: relative;
`;
