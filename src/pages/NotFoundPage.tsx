import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { SEOHead } from '@/components/layout/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The requested page could not be located." />

      <PageContainer maxWidth="sm" className="text-center py-36">
        <span className="font-mono text-sm text-[#c2a868] block mb-4">404</span>
        <h1 className="font-serif text-4xl text-[#eceae5] mb-4">
          Steeped in Mystery
        </h1>
        <p className="text-xs text-[#878c88] mb-8">
          The page or vessel you are searching for does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-block px-7 py-3 border border-[#c2a868] text-xs uppercase tracking-[0.2em] text-[#c2a868] hover:bg-[#c2a868]/10 transition-colors"
        >
          Return Home
        </Link>
      </PageContainer>
    </>
  );
}
