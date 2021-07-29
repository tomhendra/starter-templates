import { Children } from 'types';

type StyledContainerProps = {
  children: Children;
};

export const StyledContainer = ({ children }: StyledContainerProps) => (
  <div
    css={theme => ({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      height: theme.spacings.golf,
    })}
  >
    {children}
  </div>
);

export const StyledCircleGrey = () => (
  <circle
    cx="50%"
    cy="50%"
    r="10"
    css={theme => ({
      stroke: theme.colors.n500,
    })}
  />
);

type StyledCircleColorProps = {
  messageMaxLength: number;
  charsRemaining: number;
};

export const StyledCircleColor = (props: StyledCircleColorProps) => {
  const { messageMaxLength, charsRemaining } = props;
  return (
    <circle
      cx="50%"
      cy="50%"
      r="10"
      css={theme => {
        const r = 10;
        const ringLength = 2 * Math.PI * r;
        const grey = (ringLength * charsRemaining) / messageMaxLength;
        const coloured = ringLength - grey > 0 ? ringLength - grey : 0;
        const warningThreshold = messageMaxLength * 0.25;

        return {
          stroke:
            charsRemaining >= warningThreshold
              ? theme.colors.p400
              : charsRemaining < warningThreshold && charsRemaining >= 0
              ? theme.colors.warning
              : theme.colors.danger,
          strokeDasharray: `${coloured} ${grey}`,
          strokeDashoffset: ringLength / 4,
        };
      }}
    />
  );
};

type StyledSvgProps = {
  children: Children;
};

export const StyledSvg = ({ children }: StyledSvgProps) => (
  <svg
    css={theme => ({
      height: theme.iconSizes.foxtrot,
      width: theme.iconSizes.foxtrot,
      marginLeft: theme.spacings.bravo,

      '& circle': {
        fill: 'none',
        strokeWidth: 2,
      },
    })}
  >
    {children}
  </svg>
);
