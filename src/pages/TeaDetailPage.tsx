import { useParams, Link, Navigate } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';
import { TeaCanvas } from '@/three/core/TeaCanvas';
import { TeaScene } from '@/three/objects/TeaScene';
import { TEA_CATEGORIES, TEA_JOURNEY_ORDER } from '@/data/teas';
import { TeaCategoryKey } from '@/types';

interface TeaDetailPageProps {
  forcedSlug?: TeaCategoryKey;
}

export default function TeaDetailPage({ forcedSlug }: TeaDetailPageProps) {
  const params = useParams<{ slug: string }>();
  const slug = forcedSlug || (params.slug as TeaCategoryKey);

  const tea = slug ? TEA_CATEGORIES[slug] : null;

  if (!tea) {
    return <Navigate to="/teas" replace />;
  }

  // Calculate previous and next tea in the journey
  const currentIndex = TEA_JOURNEY_ORDER.indexOf(tea.key);
  const prevCategoryKey = TEA_JOURNEY_ORDER[(currentIndex - 1 + TEA_JOURNEY_ORDER.length) % TEA_JOURNEY_ORDER.length];
  const nextCategoryKey = TEA_JOURNEY_ORDER[(currentIndex + 1) % TEA_JOURNEY_ORDER.length];
  const prevTea = TEA_CATEGORIES[prevCategoryKey];
  const nextTea = TEA_CATEGORIES[nextCategoryKey];

  return (
    <>
      <SEOHead
        title={tea.name}
        description={`Explore Natured Tea ${tea.name}. Signature visual environment: ${tea.environmentDescription}`}
      />

      <PageContainer maxWidth="xl" className="pt-24 md:pt-32">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#878c88] mb-8">
          <Link to="/teas" className="hover:text-[#eceae5] transition-colors">
            Teas
          </Link>
          <span>/</span>
          <span className="text-[#c2a868]">{tea.name}</span>
        </div>

        {/* Tea Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 3D Visual Atmosphere */}
          <div className="lg:col-span-7 h-[420px] md:h-[540px] relative border border-white/[0.06] bg-[#141715]/40 rounded-xs overflow-hidden">
            <TeaCanvas>
              <TeaScene categoryKey={tea.key} />
            </TeaCanvas>

            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-[#878c88]/70">
              Interactive 3D Study
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-widest text-[#878c88]/70">
              <span>Spectrum Step 0{tea.order} / 05</span>
              <span>{tea.visualMood.atmosphere}</span>
            </div>
          </div>

          {/* Editorial Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-[#c2a868]">
              Category 0{tea.order}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#eceae5]">
              {tea.name}
            </h1>

            <div className="space-y-4 text-xs sm:text-sm text-[#878c88] leading-relaxed">
              <p>
                <strong className="text-[#eceae5] font-normal block mb-1">
                  Environmental Visual Profile:
                </strong>
                {tea.environmentDescription}
              </p>

              {/* Product Truth Placeholder Notice */}
              <div className="p-4 border border-dashed border-white/15 bg-white/[0.02] rounded-xs mt-6">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#c2a868] block mb-1">
                  [Verified Data Notice]
                </span>
                <p className="text-xs text-[#878c88]">
                  {tea.notesPlaceholder} Factual harvest dates, cultivar origins, and export specifications will be updated upon owner verification.
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                to="/export-wholesale"
                className="px-6 py-3 border border-[#c2a868] text-xs uppercase tracking-[0.2em] text-[#c2a868] hover:bg-[#c2a868]/10 transition-colors"
              >
                Inquire For Export
              </Link>
              <Link
                to="/shop"
                className="px-6 py-3 border border-white/20 text-xs uppercase tracking-[0.2em] text-[#eceae5] hover:border-white transition-colors"
              >
                View Catalogue
              </Link>
            </div>
          </div>
        </div>

        {/* 3D Signature Journey Progression Nav */}
        <div className="mt-24 pt-12 border-t border-white/[0.06] flex items-center justify-between">
          <Link
            to={`/teas/${prevTea.slug}`}
            className="group flex flex-col text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#878c88]">
              ← Previous in Journey
            </span>
            <span className="font-serif text-base text-[#eceae5] group-hover:text-[#c2a868] transition-colors">
              {prevTea.name}
            </span>
          </Link>

          <Link
            to={`/teas/${nextTea.slug}`}
            className="group flex flex-col text-right"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#878c88]">
              Next in Journey →
            </span>
            <span className="font-serif text-base text-[#eceae5] group-hover:text-[#c2a868] transition-colors">
              {nextTea.name}
            </span>
          </Link>
        </div>
      </PageContainer>
    </>
  );
}
