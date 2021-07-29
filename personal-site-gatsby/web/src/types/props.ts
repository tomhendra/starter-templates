// ....................positions....................

export type Positions = 'top' | 'right' | 'bottom' | 'left';

export type Alignments = 'start' | 'center' | 'end';

// ....................sizes....................

export type Spacings =
  | 'alpha'
  | 'bravo'
  | 'charlie'
  | 'delta'
  | 'echo'
  | 'foxtrot'
  | 'golf'
  | 'hotel'
  | 'india'
  | 'juliett'
  | 'kilo'
  | 'lima'
  | 'mike'
  | 'november'
  | 'oscar'
  | 'papa'
  | 'quebec'
  | 'romeo'
  | 'sierra'
  | 'tango'
  | 'uniform'
  | 'victor'
  | 'whiskey'
  | 'xray'
  | 'yankee'
  | 'zulu'
  | 0;

export type ButtonSizes = 'alpha' | 'bravo' | 'charlie';

export type IconSizes =
  | 'alpha'
  | 'bravo'
  | 'charlie'
  | 'delta'
  | 'echo'
  | 'foxtrot'
  | 'golf'
  | 'hotel'
  | 'india'
  | 'juliett'
  | 'kilo';

// ....................typography....................

export type HeadingSizes =
  | 'alpha'
  | 'bravo'
  | 'charlie'
  | 'delta'
  | 'echo'
  | 'foxtrot'
  | 'golf'
  | 'hotel'
  | 'india';

export type SubHeadingSizes = 'alpha' | 'bravo' | 'charlie' | 'delta';

export type TextSizes =
  | 'alpha'
  | 'bravo'
  | 'charlie'
  | 'delta'
  | 'echo'
  | 'foxtrot';

// ....................variants....................

export type Variants = 'primary' | 'secondary' | 'tertiary';

export type FeedbackVariants = 'neutral' | 'danger' | 'warning' | 'success';

// ....................colors....................

export type Colors =
  | 'white'
  | 'black'
  | 'n000'
  | 'n100'
  | 'n200'
  | 'n300'
  | 'n400'
  | 'n500'
  | 'n600'
  | 'n700'
  | 'n800'
  | 'n900'
  | 'p000'
  | 'p100'
  | 'p200'
  | 'p300'
  | 'p400'
  | 'p500'
  | 'p600'
  | 'p700'
  | 'p800'
  | 'p900'
  | 'a000'
  | 'a100'
  | 'a200'
  | 'a300'
  | 'a400'
  | 'a500'
  | 'a600'
  | 'a700'
  | 'a800'
  | 'a900'
  | 'b000'
  | 'b100'
  | 'b200'
  | 'b300'
  | 'b400'
  | 'b500'
  | 'b600'
  | 'b700'
  | 'b800'
  | 'b900'
  | 'l000'
  | 'l100'
  | 'l200'
  | 'l300'
  | 'l400'
  | 'l500'
  | 'l600'
  | 'l700'
  | 'l800'
  | 'l900'
  | 'r000'
  | 'r100'
  | 'r200'
  | 'r300'
  | 'r400'
  | 'r500'
  | 'r600'
  | 'r700'
  | 'r800'
  | 'r900'
  | 'o000'
  | 'o100'
  | 'o200'
  | 'o300'
  | 'o400'
  | 'o500'
  | 'o600'
  | 'o700'
  | 'o800'
  | 'o900'
  | 'y000'
  | 'y100'
  | 'y200'
  | 'y300'
  | 'y400'
  | 'y500'
  | 'y600'
  | 'y700'
  | 'y800'
  | 'y900'
  | 'g000'
  | 'g100'
  | 'g200'
  | 'g300'
  | 'g400'
  | 'g500'
  | 'g600'
  | 'g700'
  | 'g800'
  | 'g900'
  | 'bodyBg'
  | 'bodyColor'
  | 'neutral'
  | 'brand'
  | 'accentAlpha'
  | 'accentBravo'
  | 'accentCharlie'
  | 'shadowNeutral'
  | 'shadowPrimary'
  | 'danger'
  | 'warning'
  | 'success';

export type IconColors =
  | 'black'
  | 'white'
  | 'neutral'
  | 'brand'
  | 'accentAlpha'
  | 'accentBravo'
  | 'accentCharlie';

// ....................shadows....................

export type Shadows =
  | 'standardAlpha'
  | 'standardBravo'
  | 'standardCharlie'
  | 'standardDelta'
  | 'standardEcho'
  | 'offsetAlpha'
  | 'offsetBravo'
  | 'offsetCharlie'
  | 'offsetDelta'
  | 'offsetEcho';

// ....................icons....................

export type Icons =
  | 'Briefcase'
  | 'Code'
  | 'PenTool'
  | 'Codepen'
  | 'GitHub'
  | 'Linkedin'
  | 'Twitter'
  | 'Link2'
  | 'Loader'
  | 'ToggleLeft'
  | 'ToggleRight'
  | 'Check';

// ....................emotion....................

export type Theme = import('@emotion/react').Theme;
export type CSSObject = import('@emotion/react').CSSObject;

// ....................flexbox & grid....................

export type FlexDirection = 'row' | 'column';

export type JustifyContent =
  | 'flex-start' // default
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between';

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch' // default
  | 'baseline';

export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch' // default
  | 'space-around'
  | 'space-between';

export type GridPositions =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 'auto';
