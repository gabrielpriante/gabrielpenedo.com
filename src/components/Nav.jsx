import { NavLink } from 'react-router-dom';
import { site } from '../data/site.js';

export default function Nav() {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8 list-none m-0 p-0">
        {site.nav.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                [
                  'inline-block pb-1 text-sm md:text-base transition-colors duration-150 hover:text-accent border-b',
                  isActive
                    ? 'border-accent text-ink'
                    : 'border-transparent text-ink-muted',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
