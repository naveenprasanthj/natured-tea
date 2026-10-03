import { useState, useEffect } from 'react';
import { QualityTier } from '@/types';

export interface DeviceQualityProfile {
  tier: QualityTier;
  dpr: number;
  particlesCount: number;
  enablePostProcessing: boolean;
  isReducedMotion: boolean;
  isMobile: boolean;
}

export function useDeviceQuality(): DeviceQualityProfile {
  const [profile, setProfile] = useState<DeviceQualityProfile>(() => {
    if (typeof window === 'undefined') {
      return {
        tier: 'medium',
        dpr: 1,
        particlesCount: 40,
        enablePostProcessing: false,
        isReducedMotion: false,
        isMobile: false,
      };
    }

    const isMobile = window.innerWidth < 768;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    let tier: QualityTier = 'high';
    if (isReducedMotion || isMobile) {
      tier = isMobile ? 'medium' : 'low';
    }

    return {
      tier,
      dpr: isMobile ? 1 : devicePixelRatio,
      particlesCount: isMobile ? 25 : isReducedMotion ? 0 : 80,
      enablePostProcessing: !isMobile && !isReducedMotion,
      isReducedMotion,
      isMobile,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      let tier: QualityTier = 'high';
      if (isReducedMotion) {
        tier = 'low';
      } else if (isMobile) {
        tier = 'medium';
      }

      setProfile({
        tier,
        dpr: isMobile ? 1 : devicePixelRatio,
        particlesCount: isMobile ? 25 : isReducedMotion ? 0 : 80,
        enablePostProcessing: !isMobile && !isReducedMotion,
        isReducedMotion,
        isMobile,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return profile;
}
