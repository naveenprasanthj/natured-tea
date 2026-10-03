import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TeaCategoryKey } from '@/types';
import { TEA_CATEGORIES } from '@/data/teas';

interface TeaParticlesProps {
  categoryKey?: TeaCategoryKey;
  count?: number;
}

export function TeaParticles({ categoryKey = 'green-tea', count = 40 }: TeaParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const currentCategory = TEA_CATEGORIES[categoryKey] || TEA_CATEGORIES['green-tea'];

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scl = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Cylindrical distribution around the scene
      const radius = 0.5 + Math.random() * 2.5;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      scl[i] = Math.random();
    }
    return [pos, scl];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  if (count <= 0) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={currentCategory.visualMood.ambientLight}
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
