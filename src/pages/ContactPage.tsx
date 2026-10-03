import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch with Natured Tea for inquiries, press, and international collaboration."
      />

      <PageContainer maxWidth="md">
        <header className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a868] block mb-3">
            Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#eceae5] mb-4">
            Contact Natured
          </h1>
          <p className="text-sm text-[#878c88]">
            For client support, press, or wholesale dialogue.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.06] pt-10">
          <div className="p-8 border border-white/[0.06] bg-[#141715]/20 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c2a868] block">
              Direct Contact
            </span>
            <p className="text-xs text-[#878c88]">
              General Inquiries & Client Care:
            </p>
            <p className="font-mono text-sm text-[#eceae5]">
              hello@naturedtea.com
            </p>
          </div>

          <div className="p-8 border border-white/[0.06] bg-[#141715]/20 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c2a868] block">
              Wholesale & Export
            </span>
            <p className="text-xs text-[#878c88]">
              Commercial orders & global partnerships:
            </p>
            <Link
              to="/export-wholesale"
              className="inline-block text-xs uppercase tracking-[0.16em] text-[#c2a868] underline"
            >
              Access Wholesale Inquiry Portal →
            </Link>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
