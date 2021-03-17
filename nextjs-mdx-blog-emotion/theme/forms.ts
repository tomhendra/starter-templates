const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: '100%',
  borderRadius: 'default',
  appearance: 'none',
  lineHeight: 'tight',
};

export const forms = {
  input: {
    shadow: {
      ...commonInputStyles,
      border: 'none',
      color: 'gray.7',
      boxShadow: 'default',
      '&:focus': {
        outline: 'none',
        boxShadow: 'outline',
      },
    },
    inline: {
      ...commonInputStyles,
      backgroundColor: 'gray.2',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'gray.2',
      color: 'gray.7',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        backgroundColor: 'white',
      },
    },
    underline: {
      ...commonInputStyles,
      backgroundColor: 'transparent',
      border: 'none',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primary',
      borderRadius: '0px',
      color: 'gray.7',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        backgroundColor: 'white',
      },
    },
  },
};
