import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';
import { TeaCanvas } from '@/three/core/TeaCanvas';
import { TeaScene } from '@/three/objects/TeaScene';
import { TEA_JOURNEY_ORDER, TEA_CATEGORIES } from '@/data/teas';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Artisanal Tea Purveyor"
        description="Natured Tea crafts pure, unadulterated green, yellow, white, oolong, and black teas for tea connoisseurs and global wholesale."
      />

      <PageContainer maxWidth="xl" className="pt-24 md:pt-32">
        {/* Editorial Hero Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#c2a868]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868]">
                Foundation Preview
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-[#eceae5]">
              Pure Leaves. <br />
              <span className="italic font-light text-[#c8c5bc]">Uncompromised</span> Terroir.
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-[#878c88] max-w-lg">
              Natured Tea is built on reverence for singular tea traditions. Exploring five distinct categories through sensory fidelity and international wholesale export.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link
                to="/teas"
                className="px-7 py-3.5 bg-[#eceae5] text-[#0c0d0d] hover:bg-[#c2a868] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Explore Teas
              </Link>
              <Link
                to="/export-wholesale"
                className="px-7 py-3.5 border border-white/20 hover:border-[#c2a868] text-xs uppercase tracking-[0.2em] text-[#eceae5] hover:text-[#c2a868] transition-colors"
              >
                Export & Wholesale
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Canvas Architectural Proof */}
          <div className="lg:col-span-6 h-[420px] md:h-[500px] w-full relative flex items-center justify-center border border-white/[0.05] bg-[#141715]/40 rounded-xs overflow-hidden">
            <TeaCanvas>
              <TeaScene categoryKey="green-tea" />
            </TeaCanvas>

            {/* Atmosphere note tag */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-widest uppercase text-[#878c88]/70 pointer-events-none">
              <span>3D Storytelling Layer (Minimal Prototype)</span>
              <span>Green Tea Atmosphere</span>
            </div>
          </div>
        </section>

        {/* 5-Tea Category Grid Preview */}
        <section className="mt-32 pt-16 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c2a868] block mb-2">
                Five Categories
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#eceae5]">
                The Signature Spectrum
              </h2>
            </div>
            <Link
              to="/teas"
              className="text-xs uppercase tracking-[0.18em] text-[#c2a868] hover:underline"
            >
              View Full Spectrum →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {TEA_JOURNEY_ORDER.map((key) => {
              const tea = TEA_CATEGORIES[key];
              return (
                <Link
                  key={tea.slug}
                  to={`/teas/${tea.slug}`}
                  className="group block p-6 border border-white/[0.05] hover:border-[#c2a868]/50 bg-[#141715]/20 hover:bg-[#141715]/50 transition-all"
                >
                  <span className="text-[10px] font-mono text-[#878c88] block mb-6">
                    0{tea.order}
                  </span>
                  <h3 className="font-serif text-lg text-[#eceae5] group-hover:text-[#c2a868] transition-colors mb-2">
                    {tea.name}
                  </h3>
                  <p className="text-xs text-[#878c88] leading-relaxed">
                    {tea.environmentDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </PageContainer>
    </>
  );
}
