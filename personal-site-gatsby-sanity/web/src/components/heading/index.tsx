import { Interpolation } from '@emotion/react';

import { Variants, Children, HeadingSizes, Spacings, Theme } from 'types';

import {
  getSpacingValues,
  getHeadingDeclarations,
  withMediaQueries,
} from 'utils';

type Props = {
  css?: Interpolation<Theme>; // fix for bug when reusing component & applying extra styles with css prop.
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant: Variants;
  noSpacingBottom?: boolean;
  children: Children;
};

export const Heading = (props: Props) => {
  const {
    as = 'h2',
    variant = 'secondary',
    noSpacingBottom = false,
    children,
    ...rest
  } = props;

  const styles = (theme: Theme) => {
    const colorVariants = {
      primary: {
        color: theme.colors.n400,
      },
      secondary: {
        color: theme.colors.n300,
      },
      tertiary: {
        color: theme.colors.n700,
      },
    };

    // TODO: Look into indexing in TypeScript.
    // There must be a better way to define the below...

    type sizeVariantKey = {
      size: HeadingSizes[];
      spacingBottom: Spacings[];
    };

    type SizeVariants = {
      h1: sizeVariantKey;
      h2: sizeVariantKey;
      h3: sizeVariantKey;
      h4: sizeVariantKey;
      h5: sizeVariantKey;
      h6: sizeVariantKey;
    };

    const sizeVariants: SizeVariants = {
      h1: {
        size: ['echo', 'echo', 'foxtrot'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      h2: {
        size: ['delta', 'delta', 'echo'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      h3: {
        size: ['charlie', 'charlie', 'delta'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      h4: {
        size: ['bravo', 'bravo', 'charlie'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      h5: {
        size: ['alpha', 'alpha', 'bravo'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
      h6: {
        size: ['alpha', 'alpha', 'bravo'],
        spacingBottom: ['charlie', 'charlie', 'delta'],
      },
    };

    const headingSizeConfig = getHeadingDeclarations(
      sizeVariants[as].size,
      theme,
    );
    const spacingConfig = getSpacingValues(
      sizeVariants[as].spacingBottom,
      theme,
    );

    return withMediaQueries(theme)({
      ...colorVariants[variant],
      ...headingSizeConfig,
      fontFamily: theme.fontStack.heading,
      fontWeight: theme.fontWeight.medium,
      marginBottom: !noSpacingBottom ? spacingConfig : 0,
    });
  };

  switch (as) {
    case 'h1':
      return (
        <h1 css={theme => styles(theme)} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 css={theme => styles(theme)} {...rest}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 css={theme => styles(theme)} {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 css={theme => styles(theme)} {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 css={theme => styles(theme)} {...rest}>
          {children}
        </h5>
      );
    default:
      return (
        <h6 css={theme => styles(theme)} {...rest}>
          {children}
        </h6>
      );
  }
};
