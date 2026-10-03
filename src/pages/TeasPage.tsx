import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';
import { TEA_JOURNEY_ORDER, TEA_CATEGORIES } from '@/data/teas';

export default function TeasPage() {
  return (
    <>
      <SEOHead
        title="The Teas"
        description="Explore the five fundamental tea categories curated by Natured Tea: Green, Yellow, White, Oolong, and Black."
      />

      <PageContainer maxWidth="lg">
        <header className="mb-16 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868] block mb-3">
            Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#eceae5] mb-6">
            The Tea Spectrum
          </h1>
          <p className="text-sm text-[#878c88] leading-relaxed">
            Our curation is structured around the five foundational categories of Camellia sinensis processing. Select any category to view its distinct visual profile and structural environment.
          </p>
        </header>

        <div className="space-y-6">
          {TEA_JOURNEY_ORDER.map((key) => {
            const tea = TEA_CATEGORIES[key];
            return (
              <Link
                key={tea.slug}
                to={`/teas/${tea.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-white/[0.06] hover:border-[#c2a868]/40 bg-[#141715]/20 hover:bg-[#141715]/40 transition-all gap-6"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm text-[#878c88] pt-1">
                    0{tea.order}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl text-[#eceae5] group-hover:text-[#c2a868] transition-colors mb-2">
                      {tea.name}
                    </h2>
                    <p className="text-xs text-[#878c88] max-w-md">
                      {tea.environmentDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tea.visualMood.primaryColor }}
                  />
                  <span className="text-xs uppercase tracking-[0.16em] text-[#eceae5]/80 group-hover:text-[#c2a868] transition-colors">
                    Explore Details →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}
