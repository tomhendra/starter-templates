export default {
  name: 'logo',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and accessibility.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
