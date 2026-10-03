import { Link } from 'react-router-dom';
import { TEA_JOURNEY_ORDER, TEA_CATEGORIES } from '@/data/teas';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090a0a] border-t border-white/[0.06] pt-16 pb-12 text-[#eceae5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <span className="font-serif tracking-[0.24em] text-lg uppercase block text-[#eceae5]">
              Natured Tea
            </span>
            <p className="text-xs leading-relaxed text-[#878c88]">
              Purveyors of single-origin and unadulterated artisanal teas. Dedicated to transparent craftsmanship and sensory integrity.
            </p>
          </div>

          {/* Core Categories */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c2a868] block">
              Core Teas
            </span>
            <ul className="space-y-2">
              {TEA_JOURNEY_ORDER.map((key) => {
                const tea = TEA_CATEGORIES[key];
                return (
                  <li key={tea.slug}>
                    <Link
                      to={`/teas/${tea.slug}`}
                      className="text-xs text-[#eceae5]/70 hover:text-[#eceae5] transition-colors"
                    >
                      {tea.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Export & Trade */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c2a868] block">
              International Trade
            </span>
            <ul className="space-y-2 text-xs text-[#eceae5]/70">
              <li>
                <Link to="/export-wholesale" className="hover:text-[#eceae5] transition-colors">
                  Wholesale Inquiries
                </Link>
              </li>
              <li>
                <Link to="/export-wholesale" className="hover:text-[#eceae5] transition-colors">
                  Bulk & Private Label
                </Link>
              </li>
              <li>
                <Link to="/export-wholesale" className="hover:text-[#eceae5] transition-colors">
                  Custom Export Packaging
                </Link>
              </li>
            </ul>
          </div>

          {/* Journal & Company */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c2a868] block">
              Brand
            </span>
            <ul className="space-y-2 text-xs text-[#eceae5]/70">
              <li>
                <Link to="/our-story" className="hover:text-[#eceae5] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-[#eceae5] transition-colors">
                  Tea Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#eceae5] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#878c88] gap-4">
          <p>© {currentYear} Natured Tea. All rights reserved.</p>
          <p className="text-[10px] tracking-wider uppercase text-[#878c88]/60">
            Editorial Architecture Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
