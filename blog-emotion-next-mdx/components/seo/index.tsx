import { NextSeo } from 'next-seo';

interface SeoProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SeoProps) {
  return <NextSeo title={title} description={description} />;
}
