import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Teas', path: '/teas' },
  { name: 'Shop', path: '/shop' },
  { name: 'Export & Wholesale', path: '/export-wholesale' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Journal', path: '/journal' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0d0d]/85 backdrop-blur-md border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          to="/"
          className="flex flex-col items-start group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-serif tracking-[0.22em] text-lg uppercase text-[#eceae5] group-hover:text-[#c2a868] transition-colors">
            Natured Tea
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#878c88]">
            Artisanal Origin
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                  isActive
                    ? 'text-[#c2a868] font-medium'
                    : 'text-[#eceae5]/75 hover:text-[#eceae5]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Direct B2B / Wholesale Action */}
        <div className="hidden md:flex items-center">
          <Link
            to="/export-wholesale"
            className="px-4 py-2 border border-[#c2a868]/40 hover:border-[#c2a868] text-[11px] uppercase tracking-[0.18em] text-[#c2a868] hover:bg-[#c2a868]/10 transition-all rounded-xs"
          >
            B2B Enquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#eceae5] hover:text-[#c2a868] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d0d] border-b border-white/[0.08] px-6 py-8">
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#eceae5]/80 hover:text-[#c2a868] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/[0.06]">
              <Link
                to="/export-wholesale"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-5 py-3 border border-[#c2a868]/60 text-xs uppercase tracking-[0.2em] text-[#c2a868]"
              >
                Wholesale & Export Pathway
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
