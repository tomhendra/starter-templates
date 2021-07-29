import { Interpolation } from '@emotion/react';

import {
  getSpacingValues,
  getTextDeclarations,
  withMediaQueries,
} from '../../utils/style-helpers';

import { Variants, Children, TextSizes, Spacings, Theme } from 'types';

type Props = {
  css?: Interpolation<Theme>; // fix for bug when reusing component & applying extra styles with css prop.
  as?: 'p' | 'li' | 'article' | 'blockquote' | 'figcaption' | 'label';
  variant: Variants;
  noSpacingBottom?: boolean;
  feature?: boolean;
  bold?: boolean;
  italic?: boolean;
  strike?: boolean;
  htmlFor?: string;
  children: Children;
};

export const Text = (props: Props) => {
  const {
    as = 'p',
    variant = 'secondary',
    feature = false,
    noSpacingBottom = false,
    bold = false,
    italic = false,
    strike = false,
    htmlFor,
    children,
  } = props;

  const styles = (theme: Theme) => {
    const colorVariants = {
      primary: {
        color: theme.colors.n200,
      },
      secondary: {
        color: theme.colors.bodyColor,
      },
      tertiary: {
        color: theme.colors.n900,
      },
    };

    // TODO: --------> Look into indexing in TypeScript.
    // There must be a better way to define the below...

    type sizeVariantKey = {
      size: TextSizes[];
      spacingBottom: Spacings[];
    };

    type SizeVariants = {
      p: sizeVariantKey;
      li: sizeVariantKey;
      article: sizeVariantKey;
      figcaption: sizeVariantKey;
      label: sizeVariantKey;
      blockquote: sizeVariantKey;
    };

    const sizeVariants: SizeVariants = {
      p: {
        size: !feature
          ? ['charlie', 'charlie', 'delta']
          : ['delta', 'delta', 'echo'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      li: {
        size: ['charlie', 'charlie', 'delta'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      article: {
        size: ['charlie', 'charlie', 'delta'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      figcaption: {
        size: ['charlie', 'charlie', 'delta'],
        spacingBottom: [0],
      },
      label: {
        size: ['bravo', 'bravo', 'charlie'],
        spacingBottom: [0],
      },
      blockquote: {
        size: ['charlie', 'charlie', 'delta'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
    };

    const TextSizeConfig = getTextDeclarations(sizeVariants[as].size, theme);
    const spacingConfig = getSpacingValues(
      sizeVariants[as].spacingBottom,
      theme,
    );

    return withMediaQueries(theme)({
      ...colorVariants[variant],
      ...TextSizeConfig,
      fontFamily: theme.fontStack.default,
      fontStyle: !italic ? 'normal' : 'italic',
      fontWeight: !bold ? theme.fontWeight.regular : theme.fontWeight.bold,
      listStylePosition: as === 'li' && 'inside',
      marginLeft: as === 'li' && theme.spacings.echo,
      marginBottom: !noSpacingBottom ? spacingConfig : 0,
      textDecoration: !strike ? 'none' : 'line-through',
      wordWrap: 'break-word',
    });
  };

  const blockquoteStyles = (theme: Theme) => ({
    background: theme.colors.n800,
    borderLeft: `${theme.borderWidth.delta} solid ${theme.colors.p400}`,
    borderRadius: theme.borderRadius.alpha,
    fontStyle: 'italic',
    margin: `${theme.spacings.golf} 0`,
    padding: theme.spacings.echo,
    paddingLeft: theme.spacings.golf,
    position: 'relative',

    '&::before': {
      content: '"\\201C"',
      color: theme.colors.p800,
      fontFamily: theme.fontStack.heading,
      fontSize: theme.iconSizes.juliett,
      position: 'absolute',
      left: '1rem',
      top: '-1rem',
    },

    '&::after': {
      content: '""',
    },
  });

  switch (as) {
    case 'p':
      return <p css={theme => styles(theme)}>{children}</p>;
    case 'li':
      return <li css={theme => styles(theme)}>{children}</li>;
    case 'article':
      return <article css={theme => styles(theme)}>{children}</article>;
    case 'figcaption':
      return <figcaption css={theme => styles(theme)}>{children}</figcaption>;
    case 'label':
      return (
        <label css={theme => styles(theme)} htmlFor={htmlFor}>
          {children}
        </label>
      );
    default:
      return (
        <blockquote
          css={theme => ({ ...styles(theme), ...blockquoteStyles(theme) })}
        >
          {children}
        </blockquote>
      );
  }
};
