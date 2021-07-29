export default {
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'logo',
      type: 'logo',
      title: 'Logo',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: { type: 'category' },
    },
  ],
  // ordering for display in Sanity studio
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title, Ascending',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
