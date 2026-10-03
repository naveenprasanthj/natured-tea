import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';

// Code splitting / Lazy-loaded routes
const HomePage = lazy(() => import('@/pages/HomePage'));
const TeasPage = lazy(() => import('@/pages/TeasPage'));
const TeaDetailPage = lazy(() => import('@/pages/TeaDetailPage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const ExportWholesalePage = lazy(() => import('@/pages/ExportWholesalePage'));
const OurStoryPage = lazy(() => import('@/pages/OurStoryPage'));
const JournalPage = lazy(() => import('@/pages/JournalPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function PageFallback() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 border border-[#c2a868]/40 border-t-[#c2a868] rounded-full animate-spin" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#878c88]">
          Loading...
        </span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Index */}
            <Route index element={<HomePage />} />

            {/* Teas Directory */}
            <Route path="teas" element={<TeasPage />} />

            {/* Individual Tea Category Routes */}
            <Route path="teas/green-tea" element={<TeaDetailPage forcedSlug="green-tea" />} />
            <Route path="teas/yellow-tea" element={<TeaDetailPage forcedSlug="yellow-tea" />} />
            <Route path="teas/white-tea" element={<TeaDetailPage forcedSlug="white-tea" />} />
            <Route path="teas/oolong-tea" element={<TeaDetailPage forcedSlug="oolong-tea" />} />
            <Route path="teas/black-tea" element={<TeaDetailPage forcedSlug="black-tea" />} />
            <Route path="teas/:slug" element={<TeaDetailPage />} />

            {/* Commerce & Commercial */}
            <Route path="shop" element={<ShopPage />} />
            <Route path="export-wholesale" element={<ExportWholesalePage />} />

            {/* Editorial & Brand */}
            <Route path="our-story" element={<OurStoryPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
