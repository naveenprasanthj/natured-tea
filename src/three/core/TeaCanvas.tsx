import { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDeviceQuality } from '@/hooks/useDeviceQuality';

interface TeaCanvasProps {
  children: ReactNode;
  className?: string;
}

function Minimal3DLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-2">
        <div className="w-6 h-6 border border-[#c2a868]/40 border-t-[#c2a868] rounded-full animate-spin" />
        <span className="text-[10px] tracking-widest uppercase text-[#878c88]">Loading 3D</span>
      </div>
    </div>
  );
}

export function TeaCanvas({ children, className = '' }: TeaCanvasProps) {
  const { dpr } = useDeviceQuality();

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={<Minimal3DLoader />}>
        <Canvas
          dpr={dpr}
          camera={{ position: [0, 0.5, 4.5], fov: 40 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
