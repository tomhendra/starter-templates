import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      n000: string;
      n100: string;
      n200: string;
      n300: string;
      n400: string;
      n500: string;
      n600: string;
      n700: string;
      n800: string;
      n900: string;
      p000: string;
      p100: string;
      p200: string;
      p300: string;
      p400: string;
      p500: string;
      p600: string;
      p700: string;
      p800: string;
      p900: string;
      a000: string;
      a100: string;
      a200: string;
      a300: string;
      a400: string;
      a500: string;
      a600: string;
      a700: string;
      a800: string;
      a900: string;
      b000: string;
      b100: string;
      b200: string;
      b300: string;
      b400: string;
      b500: string;
      b600: string;
      b700: string;
      b800: string;
      b900: string;
      l000: string;
      l100: string;
      l200: string;
      l300: string;
      l400: string;
      l500: string;
      l600: string;
      l700: string;
      l800: string;
      l900: string;
      r000: string;
      r100: string;
      r200: string;
      r300: string;
      r400: string;
      r500: string;
      r600: string;
      r700: string;
      r800: string;
      r900: string;
      o000: string;
      o100: string;
      o200: string;
      o300: string;
      o400: string;
      o500: string;
      o600: string;
      o700: string;
      o800: string;
      o900: string;
      y000: string;
      y100: string;
      y200: string;
      y300: string;
      y400: string;
      y500: string;
      y600: string;
      y700: string;
      y800: string;
      y900: string;
      g000: string;
      g100: string;
      g200: string;
      g300: string;
      g400: string;
      g500: string;
      g600: string;
      g700: string;
      g800: string;
      g900: string;
      bodyBg: string;
      bodyColor: string;
      neutral: string;
      brand: string;
      accentAlpha: string;
      accentBravo: string;
      accentCharlie: string;
      shadowNeutral: string;
      shadowPrimary: string;
      danger: string;
      warning: string;
      success: string;
    };

    headings: {
      alpha: {
        fontSize: string;
        lineHeight: number;
      };
      bravo: {
        fontSize: string;
        lineHeight: number;
      };
      charlie: {
        fontSize: string;
        lineHeight: number;
      };
      delta: {
        fontSize: string;
        lineHeight: number;
      };
      echo: {
        fontSize: string;
        lineHeight: number;
      };
      foxtrot: {
        fontSize: string;
        lineHeight: number;
      };
      golf: {
        fontSize: string;
        lineHeight: number;
      };
      hotel: {
        fontSize: string;
        lineHeight: number;
      };
      india: {
        fontSize: string;
        lineHeight: number;
      };
    };

    subHeadingSizes: {
      alpha: {
        fontSize: string;
        lineHeight: number;
      };
      bravo: {
        fontSize: string;
        lineHeight: number;
      };
      charlie: {
        fontSize: string;
        lineHeight: number;
      };
      delta: {
        fontSize: string;
        lineHeight: number;
      };
    };

    text: {
      alpha: {
        fontSize: string;
        lineHeight: number;
      };
      bravo: {
        fontSize: string;
        lineHeight: number;
      };
      charlie: {
        fontSize: string;
        lineHeight: number;
      };
      delta: {
        fontSize: string;
        lineHeight: number;
      };
      echo: {
        fontSize: string;
        lineHeight: number;
      };
      foxtrot: {
        fontSize: string;
        lineHeight: number;
      };
    };

    fontStack: {
      default: string;
      subheading: string;
      heading: string;
      mono: string;
    };

    fontWeight: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };

    spacings: {
      alpha: string;
      bravo: string;
      charlie: string;
      delta: string;
      echo: string;
      foxtrot: string;
      golf: string;
      hotel: string;
      india: string;
      juliett: string;
      kilo: string;
      lima: string;
      mike: string;
      november: string;
      oscar: string;
      papa: string;
      quebec: string;
      romeo: string;
      sierra: string;
      tango: string;
      uniform: string;
      victor: string;
      whiskey: string;
      xray: string;
      yankee: string;
      zulu: string;
    };

    iconSizes: {
      alpha: string;
      bravo: string;
      charlie: string;
      delta: string;
      echo: string;
      foxtrot: string;
      golf: string;
      hotel: string;
      india: string;
      juliett: string;
      kilo: string;
    };

    borderRadius: {
      alpha: string;
      bravo: string;
      charlie: string;
      delta: string;
      echo: string;
      foxtrot: string;
    };

    borderWidth: {
      alpha: string;
      bravo: string;
      charlie: string;
      delta: string;
      echo: string;
      foxtrot: string;
      golf: string;
      hotel: string;
    };

    grid: {
      alpha: {
        cols: number;
        maxWidth: string;
        gutter: string;
      };
      bravo: {
        cols: number;
        maxWidth: string;
        gutter: string;
      };
      charlie: {
        cols: number;
        maxWidth: string;
        gutter: string;
      };
      delta: {
        cols: number;
        maxWidth: string;
        gutter: string;
      };
      echo: {
        cols: number;
        maxWidth: string;
        gutter: string;
      };
    };

    breakpoints: string[];

    transitions: {
      fast: string;
      default: string;
      slow: string;
      springDefault: string;
    };

    zIndex: {
      background: number;
      behind: number;
      default: number;
      absolute: number;
      card: number;
      form: number;
      input: number;
      popover: number;
      tooltip: number;
      footer: number;
      header: number;
      backdrop: number;
      drawer: number;
      burger: number;
      modal: number;
    };
  }
}
