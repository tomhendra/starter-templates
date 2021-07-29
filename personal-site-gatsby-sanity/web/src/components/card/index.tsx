import { Interpolation } from '@emotion/react';

import {
  Variants,
  Spacings,
  Shadows,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent,
  Children,
  Theme,
} from 'types';

import {
  shadowStandardAlpha,
  shadowStandardBravo,
  shadowStandardCharlie,
  shadowStandardDelta,
  shadowStandardEcho,
  shadowOffsetAlpha,
  shadowOffsetBravo,
  shadowOffsetCharlie,
  shadowOffsetDelta,
  shadowOffsetEcho,
  getSpacingValues,
  withMediaQueries,
} from 'utils';

type Props = {
  css?: Interpolation<Theme>; // fix for bug when reusing component & applying extra styles with css prop.
  variant?: Variants;
  accent?: 'brand' | 'accentAlpha' | 'accentBravo' | 'accentCharlie';
  shadow?: Shadows;
  padding?: Spacings | Spacings[];
  paddingTop?: Spacings | Spacings[];
  paddingRight?: Spacings | Spacings[];
  paddingBottom?: Spacings | Spacings[];
  paddingLeft?: Spacings | Spacings[];
  flexDirection?: FlexDirection | FlexDirection[];
  justifyContent?: JustifyContent | JustifyContent[];
  alignItems?: AlignItems | AlignItems[];
  alignContent?: AlignContent | AlignContent[];
  children: Children;
};

export function Card(props: Props) {
  const {
    variant = 'secondary',
    accent = 'accentBravo',
    shadow = 'standardDelta',
    padding = 'foxtrot',
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    flexDirection = 'column',
    justifyContent = 'flex-start',
    alignItems = 'center',
    alignContent,
    children,
    ...rest
  } = props;

  return (
    <div
      css={theme => {
        const baseStyles = {
          backgroundColor: theme.colors.white,
          borderRadius: theme.borderRadius.charlie,
          borderStyle: 'solid',
          borderWidth: theme.borderWidth.echo,
          display: 'flex',
          flexWrap: 'no-wrap',
          height: '100%',
          overflow: 'hidden',
          zIndex: theme.zIndex.card,
        };

        const paddingStyles = {
          padding: padding && getSpacingValues(padding, theme),
          paddingTop: paddingTop && getSpacingValues(paddingTop, theme),
          paddingRight: paddingRight && getSpacingValues(paddingRight, theme),
          paddingBottom:
            paddingBottom && getSpacingValues(paddingBottom, theme),
          paddingLeft: paddingLeft && getSpacingValues(paddingLeft, theme),
        };

        const flexboxStyles = {
          flexDirection,
          justifyContent,
          alignItems,
          alignContent,
        };

        // color variants must be matched child elements.
        // I.e.Text, Heading, Subheading must be of same variant.
        const colorVariants = {
          primary: {
            backgroundColor: theme.colors.white,
          },
          secondary: {
            backgroundColor: theme.colors.bodyBg,
          },
          tertiary: {
            backgroundColor: theme.colors.n100,
          },
        };

        const colorConfig = colorVariants[variant];

        const accentStyles = {
          brand: {
            borderColor: theme.colors.brand,
          },
          accentAlpha: {
            borderColor: theme.colors.accentAlpha,
          },
          accentBravo: {
            borderColor: theme.colors.accentBravo,
          },
          accentCharlie: {
            borderColor: theme.colors.accentCharlie,
          },
        };

        const accentConfig = accentStyles[accent];

        const shadowStyles = {
          standardAlpha: shadowStandardAlpha('shadowNeutral', theme),
          standardBravo: shadowStandardBravo('shadowNeutral', theme),
          standardCharlie: shadowStandardCharlie('shadowNeutral', theme),
          standardDelta: shadowStandardDelta('shadowNeutral', theme),
          standardEcho: shadowStandardEcho('shadowNeutral', theme),
          offsetAlpha: shadowOffsetAlpha('shadowNeutral', theme),
          offsetBravo: shadowOffsetBravo('shadowNeutral', theme),
          offsetCharlie: shadowOffsetCharlie('shadowNeutral', theme),
          offsetDelta: shadowOffsetDelta('shadowNeutral', theme),
          offsetEcho: shadowOffsetEcho('shadowNeutral', theme),
        };

        const shadowConfig = shadowStyles[shadow];

        return withMediaQueries(theme)({
          ...baseStyles,
          ...paddingStyles,
          ...flexboxStyles,
          ...colorConfig,
          ...accentConfig,
          ...shadowConfig,
        });
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
