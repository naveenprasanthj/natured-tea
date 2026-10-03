import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';

export default function JournalPage() {
  return (
    <>
      <SEOHead
        title="Journal"
        description="Essays, brewing guides, and terroir studies from the Natured Tea editorial team."
      />

      <PageContainer maxWidth="md">
        <header className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868] block mb-3">
            Editorial & Studies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#eceae5] mb-4">
            Tea Journal
          </h1>
          <p className="text-sm text-[#878c88]">
            Authoritative essays, water chemistry, brewing notes, and harvest dispatches.
          </p>
        </header>

        <div className="space-y-6 border-t border-white/[0.06] pt-10">
          <article className="p-8 border border-white/[0.06] bg-[#141715]/20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c2a868] block mb-2">
              Guide Placeholder
            </span>
            <h2 className="font-serif text-2xl text-[#eceae5] mb-3">
              Understanding Oxidation: From Leaf to Amber Liquor
            </h2>
            <p className="text-xs text-[#878c88] leading-relaxed mb-4">
              A deep exploration of enzymatic breakdown and how leaf cellular structure determines the spectrum between unoxidized green tea and fully oxidized black tea.
            </p>
            <span className="text-[10px] tracking-widest uppercase text-[#878c88]/60">
              [Article verification pending publication]
            </span>
          </article>
        </div>
      </PageContainer>
    </>
  );
}
