import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

export default function Seo({ title, description, path = '/', children }) {
  const canonical = new URL(path, site.url).toString();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || site.defaultDescription} />
      <link rel="canonical" href={canonical} />
      {children}
    </Helmet>
  );
}
