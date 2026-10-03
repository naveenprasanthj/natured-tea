import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';

export default function OurStoryPage() {
  return (
    <>
      <SEOHead
        title="Our Story"
        description="The ethos and origin of Natured Tea. Dedicated to pure craftsmanship and international tea culture."
      />

      <PageContainer maxWidth="md">
        <header className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868] block mb-3">
            Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#eceae5] mb-6">
            The Natured Ethos
          </h1>
          <p className="text-sm leading-relaxed text-[#878c88]">
            Natured Tea was established to celebrate the authentic essence of Camellia sinensis. Free from artificial flavorings, additives, or compromises.
          </p>
        </header>

        <div className="space-y-8 text-xs sm:text-sm text-[#878c88] leading-relaxed border-t border-white/[0.06] pt-10">
          <p>
            The world of tea is as nuanced as fine wine, yet frequently clouded by opaque supply chains and artificial aromas. Natured Tea operates on a philosophy of pure terroir: highlighting the unaltered character imparted by soil, climate, elevation, and time-honored artisanal mastery.
          </p>

          <p>
            From the crisp morning mist of high-altitude green tea gardens to the slow oxidation of cliffside oolongs, each cup is an invitation to experience nature without distortion.
          </p>

          {/* Development placeholder notice */}
          <div className="p-6 border border-dashed border-white/15 bg-[#141715]/30">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c2a868] block mb-1">
              [Brand Narrative Placeholder]
            </span>
            <p className="text-xs text-[#878c88]">
              Founder interviews, specific estate partnerships, and brand timeline will be authored and verified during the editorial content stage.
            </p>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
