const config = {
  site: {
    name: 'TomHendra',
    copyright: `© ${new Date().getFullYear()} Tom Hendra`,
  },
  links: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/tomhendra',
    },
  ],
  blog: {
    contentPath: './content/posts',
  },
  page: {
    contentPath: './content/pages',
  },
  mdx: {
    options: {},
  },
};

export type Config = typeof config;

export default config as Config;
