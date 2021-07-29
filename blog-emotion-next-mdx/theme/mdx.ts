import { space } from './sizing';
import { fontSizes } from './fonts';
import { colors } from './colors';

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  margin: space[0],
  marginBottom: space[1],
};

export const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    ...heading,
    fontSize: fontSizes[6],
    marginTop: space[2],
  },
  h2: {
    ...heading,
    fontSize: fontSizes[5],
    marginTop: space[2],
  },
  h3: {
    ...heading,
    fontSize: fontSizes[4],
    marginTop: space[3],
  },
  h4: {
    ...heading,
    fontSize: fontSizes[3],
  },
  h5: {
    ...heading,
    fontSize: fontSizes[2],
  },
  h6: {
    ...heading,
    fontSize: fontSizes[1],
    marginBottom: space[2],
  },
  code: {
    padding: space[3],
  },

  pre: {},
  hr: {
    background: colors.muted,
    border: 0,
    height: '1px',
    margin: space[3],
  },
};
