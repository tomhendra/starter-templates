export type Children = import('react').ReactNode;

// ....................sanity serializers....................

type BodyPortableText = {
  _key: string;
  _type: 'block';
  children: [];
  markDefs: [];
  style: string;
};

export type BodyPortableTextType = {
  node: BodyPortableText;
  children: Children;
};

type Figure = {
  _key: string;
  _type: 'figure';
  alt: string;
  asset: { _id: string };
  caption: string;
};

export type FigureType = {
  node: Figure;
  children: Children;
};

type CodeBlock = {
  _key: string;
  _type: 'codeBlock';
  code: string;
  language: import('prism-react-renderer').Language;
};

export type CodeBlockType = {
  node: CodeBlock;
  children: Children;
};

type ListItem = {
  _key: string;
  _type: 'block';
  children: [];
  level: number;
  listItem: string;
  markDefs: [];
  style: string;
};

export type ListItemType = {
  node: ListItem;
  children: Children;
};

export type LinkMark = {
  mark: {
    _key: string;
    _type: 'link';
    href: string;
  };
  children: Children;
};

// ....................sanity queried data....................

export type SiteMetadata = {
  siteMetadata: {
    title: string;
    description: string;
    author: string;
  };
};

export type Block = BodyPortableText | Figure | CodeBlock | ListItem;

export type Category = {
  _id: string;
  title: string;
};

export type TechStackHookQuery = {
  _id: string;
  title: string;
  category: {
    title: string;
  };
  logo: {
    asset: {
      logoUrl: string;
      small: import('gatsby-image').FixedObject;
      medium: import('gatsby-image').FixedObject;
      large: import('gatsby-image').FixedObject;
    };
    alt: string;
  };
};

export type TechStackHookData = {
  id: string;
  title: string;
  category: string;
  logoSmall: import('gatsby-image').FixedObject;
  logoMedium: import('gatsby-image').FixedObject;
  logoLarge: import('gatsby-image').FixedObject;
  logoUrl: string;
  alt: string;
};

export type BlogPostTemplateQuery = {
  _id: string;
  title: string;
  publishedAt: Date;
  mainImage: {
    asset: {
      fluid: import('gatsby-image').FluidObject;
    };
    alt: string;
    caption: string;
  };
  categories: Category[];
  _rawBody: Block[];
  _rawExcerpt: Block[];
};

export type BlogPostHookQuery = {
  _id: string;
  title: string;
  publishedAt: Date;
  mainImage: {
    asset: {
      fluid: import('gatsby-image').FluidObject;
    };
    alt: string;
  };
  slug: {
    current: string;
  };
};

export type BlogPostHookData = {
  id: string;
  title: string;
  slug: string;
  publishedAt: Date;
  mainImage: import('gatsby-image').FluidObject;
  alt: string;
};

export type ProjectTemplateQuery = {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      fluid: import('gatsby-image').FluidObject;
    };
    alt: string;
    caption: string;
  };
  _rawDescription: Block[];
  _rawPurpose: Block[];
  _rawObjective: Block[];
  _rawApproach: Block[];
  _rawTechstack: TechStackHookQuery[];
  _rawRole: Block[];
  _rawCredits: Block[];
  repo: string;
  url: string;
};

export type ProjectHookQuery = {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      fluid: import('gatsby-image').FluidObject;
    };
    alt: string;
  };
  slug: {
    current: string;
  };
  _rawDescription: Block[];
};

export type ProjectHookData = {
  id: string;
  title: string;
  mainImage: import('gatsby-image').FluidObject;
  alt: string;
  slug: string;
  description: Block[];
};
