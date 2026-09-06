import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

/**
 * Per page title, description and canonical URL, plus Open Graph and Twitter
 * card tags so shared links render with a title, summary and image.
 */
export default function Seo({
  title,
  description,
  path = '/',
  ogType = 'website',
  children,
}) {
  const canonical = new URL(path, site.url).toString();
  const summary = description || site.defaultDescription;
  const image = new URL(site.ogImage, site.url).toString();

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={summary} />
      <meta name="author" content={site.name} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={summary} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={site.ogImageAlt} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={site.ogImageAlt} />

      {children}
    </Helmet>
  );
}
