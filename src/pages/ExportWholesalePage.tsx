import { useState, FormEvent } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';
import { TEA_JOURNEY_ORDER, TEA_CATEGORIES } from '@/data/teas';

export default function ExportWholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Export & Wholesale"
        description="Global B2B wholesale, bulk tea export, private label, and custom international packaging partnerships with Natured Tea."
      />

      <PageContainer maxWidth="lg">
        {/* Header */}
        <header className="mb-16 max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868] block mb-3">
            B2B Commercial Pathway
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#eceae5] mb-6">
            Export & Wholesale Inquiries
          </h1>
          <p className="text-sm sm:text-base text-[#878c88] leading-relaxed">
            Natured Tea facilitates international distribution, single-origin bulk supply, private label programs, and bespoke retail packaging for hospitality and specialty tea buyers worldwide.
          </p>
        </header>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 border border-white/[0.06] bg-[#141715]/20">
            <span className="text-xs font-mono text-[#c2a868] block mb-4">01</span>
            <h2 className="font-serif text-xl text-[#eceae5] mb-2">Bulk Tea Supply</h2>
            <p className="text-xs text-[#878c88] leading-relaxed">
              Direct estate loose leaf supply across the 5 core tea categories, vacuum packed in export-grade foil bags.
            </p>
          </div>

          <div className="p-8 border border-white/[0.06] bg-[#141715]/20">
            <span className="text-xs font-mono text-[#c2a868] block mb-4">02</span>
            <h2 className="font-serif text-xl text-[#eceae5] mb-2">Private Label</h2>
            <p className="text-xs text-[#878c88] leading-relaxed">
              Tailored custom blending, tin fabrication, pyramid tea bag formats, and bespoke packaging for international brands.
            </p>
          </div>

          <div className="p-8 border border-white/[0.06] bg-[#141715]/20">
            <span className="text-xs font-mono text-[#c2a868] block mb-4">03</span>
            <h2 className="font-serif text-xl text-[#eceae5] mb-2">Global Distribution</h2>
            <p className="text-xs text-[#878c88] leading-relaxed">
              Comprehensive phytosanitary documentation, air & ocean freight logistics, and dedicated account stewardship.
            </p>
          </div>
        </div>

        {/* Dedicated Enquiry Flow Form */}
        <div className="max-w-3xl border border-white/[0.08] p-8 md:p-12 bg-[#141715]/30">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c2a868] block">
                Enquiry Registered
              </span>
              <h2 className="font-serif text-2xl text-[#eceae5]">
                Thank you for your commercial interest.
              </h2>
              <p className="text-xs text-[#878c88] max-w-md mx-auto">
                In this development prototype, form submissions are logged locally. Verified commercial terms and quotation proposals will be delivered via your representative.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs uppercase tracking-[0.18em] text-[#c2a868] underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/[0.06] pb-4 mb-6">
                <h2 className="font-serif text-2xl text-[#eceae5] mb-1">
                  Commercial Request Form
                </h2>
                <span className="text-xs text-[#878c88]">
                  Please specify your business requirements to receive documentation and lot specifications.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or entity"
                    className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Export country"
                    className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                    Primary Tea Category of Interest
                  </label>
                  <select className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]">
                    <option value="all">Full Spectrum Portfolio</option>
                    {TEA_JOURNEY_ORDER.map((key) => (
                      <option key={key} value={key}>
                        {TEA_CATEGORIES[key].name}
                      </option>
                    ))}
                    <option value="private-label">Private Label / Custom Packaging</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                    Estimated Annual Volume
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 100kg - 500kg, or 1000+ units"
                    className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] text-[#878c88] mb-2">
                  Project Notes & Specifications
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail certification needs, target launch timing, or custom blending requirements..."
                  className="w-full bg-[#0c0d0d] border border-white/10 px-4 py-3 text-xs text-[#eceae5] focus:outline-none focus:border-[#c2a868]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 bg-[#c2a868] text-[#0c0d0d] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#dfc27d] transition-colors"
                >
                  Submit Export Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </PageContainer>
    </>
  );
}
