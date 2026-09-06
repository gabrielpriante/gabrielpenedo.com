import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="border-b border-rule">
        <div className="container-page py-6 md:py-8">
          <Nav />
        </div>
      </header>
      <main id="main" className="container-page flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
