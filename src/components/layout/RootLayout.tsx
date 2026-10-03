import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export function RootLayout() {
  // Activate Lenis smooth scrolling engine
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0d0d] text-[#eceae5]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
