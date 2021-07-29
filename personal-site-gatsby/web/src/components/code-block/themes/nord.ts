export const theme = {
  plain: {
    color: '#d8dee9',
    backgroundColor: '#3b4252',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(97, 110, 136)',
      },
    },
    {
      types: ['char', 'constant', 'changed'],
      style: {
        color: 'rgb(235, 203, 139)',
      },
    },
    {
      types: ['builtin', 'tag', 'operator'],
      style: {
        color: 'rgb(129, 161, 193)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(180, 142, 173)',
      },
    },
    {
      types: ['class-name', 'attr-name'],
      style: {
        color: 'rgb(143, 188, 187)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(136, 192, 208)',
      },
    },
    {
      types: ['keyword'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(191, 97, 106)',
      },
    },
    {
      types: ['inserted', 'string'],
      style: {
        color: 'rgb(163, 190, 140)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(236, 239, 244)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(216, 222, 233)',
      },
    },
  ],
};
