import { TeaCategoryKey } from '@/types';
import { TeaEnvironment } from '@/three/environments/TeaEnvironment';
import { TeaProduct } from '@/three/objects/TeaProduct';
import { TeaLeaves } from '@/three/objects/TeaLeaves';
import { TeaParticles } from '@/three/objects/TeaParticles';
import { CameraRig } from '@/three/core/CameraRig';
import { TeaEffects } from '@/three/effects/TeaEffects';
import { useDeviceQuality } from '@/hooks/useDeviceQuality';

interface TeaSceneProps {
  categoryKey?: TeaCategoryKey;
  interactive?: boolean;
}

export function TeaScene({ categoryKey = 'green-tea', interactive = true }: TeaSceneProps) {
  const { particlesCount, enablePostProcessing, isReducedMotion } = useDeviceQuality();

  return (
    <>
      <TeaEnvironment categoryKey={categoryKey} />
      <TeaProduct categoryKey={categoryKey} />
      <TeaLeaves categoryKey={categoryKey} count={isReducedMotion ? 6 : 14} />
      <TeaParticles categoryKey={categoryKey} count={particlesCount} />
      {interactive && !isReducedMotion && <CameraRig intensity={0.4} />}
      <TeaEffects enabled={enablePostProcessing} />
    </>
  );
}
