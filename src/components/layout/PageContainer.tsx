import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const MAX_WIDTH_MAP = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export function PageContainer({
  children,
  className = '',
  maxWidth = 'lg',
}: PageContainerProps) {
  return (
    <div
      className={`w-full mx-auto px-6 md:px-12 pt-32 pb-24 ${MAX_WIDTH_MAP[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}
