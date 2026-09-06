import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found · Gabriel Penedo"
        description="This page does not exist."
        path="/"
      />
      <section className="py-14 md:py-24">
        <h1 className="text-4xl md:text-5xl">Page not found</h1>
        <p className="prose-measure mt-6">
          This page does not exist. You can return to the{' '}
          <Link className="link-quiet" to="/">
            home page
          </Link>{' '}
          or read about the{' '}
          <Link className="link-quiet" to="/research">
            current research
          </Link>
          .
        </p>
      </section>
    </>
  );
}
