import 'typeface-fira-sans-extra-condensed';
import 'typeface-inconsolata';
import 'typeface-fira-code';

// ....................colours....................

const white = '#FFFFFF';
const black = '#0F131A';

const neutral = {
  n000: 'hsla(220, 16%, 22%, 1)', // #2e3440 Nord Polar Night
  n100: 'hsla(222, 16%, 28%, 1)', // #3b4252 Nord Polar Night
  n200: 'hsla(220, 17%, 32%, 1)', // #434c5e Nord Polar Night
  n300: 'hsla(220, 16%, 36%, 1)', // #4c566a Nord Polar Night
  n400: 'hsla(220, 17%, 41%, 1)', // #57637a
  n500: 'hsla(219, 28%, 88%, 1)', // #d8dee9 Nord Snow Storm
  n600: 'hsla(218, 27%, 92%, 1)', // #e5e9f0 Nord Snow Storm
  n700: 'hsla(218, 27%, 94%, 1)', // #eceff4 Nord Snow Storm
  n800: 'hsla(220, 27%, 96%, 1)', // #f2f4f8
  n900: 'hsla(220, 27%, 98%, 1)', // #f9f9fb
};

const aqua = {
  a000: 'hsla(193, 21%, 43%, 1)', // #577b85
  a100: 'hsla(194, 21%, 49%, 1)', // #638b97
  a200: 'hsla(193, 26%, 55%, 1)', // #6e9daa
  a300: 'hsla(193, 32%, 60%, 1)', // #78abba
  a400: 'hsla(193, 43%, 67%, 1)', // #88c0d0 Nord Frost
  a500: 'hsla(179, 25%, 65%, 1)', // #8fbcbb Nord Frost
  a600: 'hsla(179, 25%, 68%, 1)', // #99c2c1
  a700: 'hsla(178, 25%, 71%, 1)', // #a3c8c6
  a800: 'hsla(178, 25%, 74%, 1)', // #accdcc
  a900: 'hsla(178, 25%, 77%, 1)', // #b6d3d2
};

const blue = {
  b000: 'hsla(213, 30%, 19%, 1)', // #222f3f
  b100: 'hsla(213, 30%, 24%, 1)', // #2b3b50
  b200: 'hsla(212, 29%, 33%, 1)', // #3c536d
  b300: 'hsla(213, 29%, 43%, 1)', // #4e6a8d
  b400: 'hsla(213, 32%, 52%, 1)', // #5e81ac Nord Frost
  b500: 'hsla(210, 34%, 63%, 1)', // #81a1c1 Nord Frost
  b600: 'hsla(209, 34%, 70%, 1)', // #98b3cd
  b700: 'hsla(209, 34%, 76%, 1)', // #adc2d7
  b800: 'hsla(209, 33%, 83%, 1)', // #c5d4e2
  b900: 'hsla(210, 35%, 90%, 1)', // #dde6ee
};

const lavender = {
  l000: 'hsla(311, 12%, 17%, 1)', // #31262f
  l100: 'hsla(313, 12%, 23%, 1)', // #42343f
  l200: 'hsla(311, 12%, 29%, 1)', // #534150
  l300: 'hsla(310, 12%, 40%, 1)', // #725a6e
  l400: 'hsla(312, 13%, 52%, 1)', // #95758e
  l500: 'hsla(311, 20%, 63%, 1)', // #b48ead Nord Aurora
  l600: 'hsla(312, 20%, 70%, 1)', // #c2a3bc
  l700: 'hsla(313, 20%, 76%, 1)', // #ceb6c9
  l800: 'hsla(311, 20%, 83%, 1)', // #dccbd9
  l900: 'hsla(312, 19%, 90%, 1)', // #eae1e8
};

const red = {
  r000: 'hsla(355, 33%, 16%, 1)', // #361b1e
  r100: 'hsla(355, 32%, 21%, 1)', // #472427
  r200: 'hsla(354, 32%, 26%, 1)', // #582d31
  r300: 'hsla(354, 33%, 36%, 1)', // #7a3e44
  r400: 'hsla(355, 32%, 46%, 1)', // #9b5056
  r500: 'hsla(354, 42%, 56%, 1)', // #bf616a Nord Aurora
  r600: 'hsla(354, 42%, 64%, 1)', // #ca7d84
  r700: 'hsla(354, 42%, 72%, 1)', // #d69aa0
  r800: 'hsla(354, 41%, 80%, 1)', // #e1b7bb
  r900: 'hsla(353, 42%, 88%, 1)', // #edd4d7
};

const orange = {
  o000: 'hsla(14, 30%, 17%, 1)', // #38241e
  o100: 'hsla(15, 30%, 23%, 1)', // #4c3229
  o200: 'hsla(15, 30%, 29%, 1)', // #603f34
  o300: 'hsla(14, 30%, 40%, 1)', // #855647
  o400: 'hsla(14, 32%, 52%, 1)', // #ac705d
  o500: 'hsla(14, 51%, 63%, 1)', // #d08770 Nord Aurora
  o600: 'hsla(14, 50%, 69%, 1)', // #d79b88
  o700: 'hsla(14, 50%, 76%, 1)', // #e0b1a3
  o800: 'hsla(14, 49%, 83%, 1)', // #e9c8be
  o900: 'hsla(14, 50%, 90%, 1)', // #f2dfd9
};

const yellow = {
  y000: 'hsla(40, 26%, 20%, 1)', // #403726
  y100: 'hsla(39, 26%, 27%, 1)', // #574a33
  y200: 'hsla(40, 25%, 34%, 1)', // #6c5e41
  y300: 'hsla(40, 26%, 47%, 1)', // #978259
  y400: 'hsla(40, 39%, 60%, 1)', // #c1a671
  y500: 'hsla(40, 71%, 73%, 1)', // #ebcb8b Nord Aurora
  y600: 'hsla(40, 70%, 78%, 1)', // #eed4a0
  y700: 'hsla(39, 70%, 83%, 1)', // #f2ddb5
  y800: 'hsla(40, 68%, 88%, 1)', // #f5e7cc
  y900: 'hsla(39, 68%, 93%, 1)', // #f9f1e1
};

const green = {
  g000: 'hsla(92, 14%, 18%, 1)', // #2d3427
  g100: 'hsla(92, 16%, 24%, 1)', // #3d4733
  g200: 'hsla(91, 15%, 30%, 1)', // #4c5841
  g300: 'hsla(93, 15%, 41%, 1)', // #677859
  g400: 'hsla(92, 17%, 53%, 1)', // #869c73
  g500: 'hsla(92, 28%, 65%, 1)', // #a3be8c Nord Aurora
  g600: 'hsla(92, 28%, 71%, 1)', // #b4caa0
  g700: 'hsla(92, 28%, 77%, 1)', // #c3d5b4
  g800: 'hsla(91, 28%, 84%, 1)', // #d6e2cb
  g900: 'hsla(94, 28%, 90%, 1)', // #e5edde
};

const primary = {
  p000: aqua.a000,
  p100: aqua.a100,
  p200: aqua.a200,
  p300: aqua.a300,
  p400: aqua.a400,
  p500: aqua.a500,
  p600: aqua.a600,
  p700: aqua.a700,
  p800: aqua.a800,
  p900: aqua.a900,
};

const misc = {
  bodyBg: neutral.n900,
  bodyColor: neutral.n100,
  neutral: neutral.n300,
  brand: primary.p400,
  accentAlpha: blue.b400,
  accentBravo: lavender.l500,
  accentCharlie: primary.p500,
  shadowNeutral: neutral.n500,
  shadowPrimary: primary.p400,
  danger: red.r500,
  warning: yellow.y500,
  success: green.g500,
};

export const colors = {
  white,
  black,
  ...neutral,
  ...blue,
  ...aqua,
  ...primary,
  ...lavender,
  ...red,
  ...orange,
  ...yellow,
  ...green,
  ...misc,
};

// ....................typography....................

export const headings = {
  alpha: {
    fontSize: '2rem', // 20px
    lineHeight: 1.2,
  },
  bravo: {
    fontSize: '2.4rem', // 24px
    lineHeight: 1.2,
  },
  charlie: {
    fontSize: '3rem', // 30px
    lineHeight: 1.2,
  },
  delta: {
    fontSize: '3.6rem', // 36px
    lineHeight: 1.1,
  },
  echo: {
    fontSize: '4.8rem', // 48px
    lineHeight: 1,
  },
  foxtrot: {
    fontSize: '6rem', // 60px
    lineHeight: 1,
  },
  golf: {
    fontSize: '7.2rem', // 72px
    lineHeight: 1,
  },
  hotel: {
    fontSize: '8.4rem', // 84px
    lineHeight: 1,
  },
  india: {
    fontSize: '9.6rem', // 96px
    lineHeight: 1,
  },
};

export const subHeadingSizes = {
  alpha: {
    fontSize: '1.8rem', // 18px
    lineHeight: 1.5,
  },
  bravo: {
    fontSize: '2rem', // 20px
    lineHeight: 1.5,
  },
  charlie: {
    fontSize: '2.4rem', // 24px
    lineHeight: 1.4,
  },
  delta: {
    fontSize: '3.4rem', // 34px
    lineHeight: 1.3,
  },
};

export const text = {
  alpha: {
    fontSize: '1.1rem', // 11px
    lineHeight: 1.5,
  },
  bravo: {
    fontSize: '1.3rem', // 13px
    lineHeight: 1.5,
  },
  charlie: {
    fontSize: '1.5rem', // 15px
    lineHeight: 1.5,
  },
  delta: {
    fontSize: '1.7rem', // 17px
    lineHeight: 1.5,
  },
  echo: {
    fontSize: '2rem', // 20px
    lineHeight: 1.5,
  },
  foxtrot: {
    fontSize: '2.4rem', // 24px
    lineHeight: 1.5,
  },
};

export const fontStack = {
  default: 'Inconsolata, monospace',
  subheading: 'Inconsolata, monospace',
  heading: 'Fira Sans Extra Condensed, sans-serif',
  mono: 'Fira Code, monospace',
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

// ....................sizes....................

export const spacings = {
  alpha: '0.4rem', // 4px
  bravo: '0.8rem', // 8px
  charlie: '1.2rem', // 12px
  delta: '1.6rem', // 16px
  echo: '2.4rem', // 24px
  foxtrot: '3.2rem', // 32px
  golf: '4.8rem', // 48px
  hotel: '6.4rem', // 64px
  india: '9.6rem', // 96px
  juliett: '12.8rem', // 128px
  kilo: '19.2rem', // 192px
  lima: '25.6rem', // 256px
  mike: '32rem', // 320px
  november: '38.4rem', // 384px
  oscar: '44.8rem', // 448px
  papa: '51.2rem', // 512px
  quebec: '57.6rem', // 576px
  romeo: '64rem', // 640px
  sierra: '70.4rem', // 704px
  tango: '76.8rem', // 768px
  uniform: '83.2rem', // 832px
  victor: '89.6rem', // 896px
  whiskey: '96rem', // 960px
  xray: '120rem', // 1200px
  yankee: '180rem', // 1800px
  zulu: '200rem', // 2000px
};

export const iconSizes = {
  alpha: '12px',
  bravo: '14px',
  charlie: '16px',
  delta: '18px',
  echo: '20px',
  foxtrot: '24px',
  golf: '28px',
  hotel: '32px',
  india: '48px',
  juliett: '64px',
  kilo: '84px',
};

export const borderRadius = {
  alpha: '2px',
  bravo: '4px',
  charlie: '6px',
  delta: '8px',
  echo: '12px',
  foxtrot: '14px',
};

export const borderWidth = {
  alpha: '1px',
  bravo: '2px',
  charlie: '3px',
  delta: '4px',
  echo: '5px',
  foxtrot: '8px',
  golf: '10px',
  hotel: '12px',
};

// ....................layout....................
// maxWidth for grid - limited by eye for when layout looks too wide
// mobile first, alpha is default
export const grid = {
  alpha: {
    cols: 8,
    maxWidth: '38rem', // 380px
    gutter: spacings.delta,
  },
  bravo: {
    cols: 8,
    maxWidth: '51.2rem', // 512px
    gutter: spacings.delta,
  },
  charlie: {
    cols: 12,
    maxWidth: '70.4rem', // 704px
    gutter: spacings.delta,
  },
  delta: {
    cols: 12,
    maxWidth: '86.4rem', // 864px
    gutter: spacings.echo,
  },
  echo: {
    cols: 12,
    maxWidth: '120rem', // 1200px
    gutter: spacings.echo,
  },
};

export const breakpoints = [
  '576px', // Small devices (landscape phones, 576px and up)
  '768px', // Medium devices (tablets, 768px and up)
  '992px', // Large devices (desktops, 992px and up)
  '1200px', // Extra large devices (large desktops, 1200px and up)
];
// ....................misc....................

export const transitions = {
  fast: '100ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
  default: '200ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
  slow: '300ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
  springDefault: '275ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export const zIndex = {
  background: -2,
  behind: -1,
  default: 0,
  absolute: 1,
  card: 10,
  form: 15,
  input: 20,
  popover: 30,
  tooltip: 31,
  footer: 500,
  header: 600,
  backdrop: 700,
  drawer: 800,
  burger: 900,
  modal: 1000,
};
