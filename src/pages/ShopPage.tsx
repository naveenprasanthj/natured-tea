import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  return (
    <>
      <SEOHead
        title="Shop"
        description="Natured Tea curated retail offerings. Pure single-origin selections."
      />

      <PageContainer maxWidth="md">
        <header className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868] block mb-3">
            Retail Catalogue
          </span>
          <h1 className="font-serif text-4xl text-[#eceae5] mb-4">
            Curated Offerings
          </h1>
          <p className="text-sm text-[#878c88]">
            Individual retail packaging and seasonal collections.
          </p>
        </header>

        {/* Minimal Structural Placeholder */}
        <div className="p-12 border border-dashed border-white/15 bg-[#141715]/20 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c2a868] block">
            [Catalogue Architecture Stage]
          </span>
          <p className="text-sm text-[#878c88] max-w-md mx-auto">
            Product catalog and variant specifications will be populated once inventory definitions and packaging batches are verified by the project owner.
          </p>
          <div className="pt-4">
            <Link
              to="/export-wholesale"
              className="text-xs uppercase tracking-[0.18em] text-[#eceae5] hover:text-[#c2a868] underline transition-colors"
            >
              Seeking Commercial Volume? View Wholesale Pathway →
            </Link>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
