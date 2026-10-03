import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TeaCategoryKey } from '@/types';
import { TEA_CATEGORIES } from '@/data/teas';

interface TeaLeavesProps {
  categoryKey?: TeaCategoryKey;
  count?: number;
}

export function TeaLeaves({ categoryKey = 'green-tea', count = 12 }: TeaLeavesProps) {
  const groupRef = useRef<THREE.Group>(null);
  const currentCategory = TEA_CATEGORIES[categoryKey] || TEA_CATEGORIES['green-tea'];

  // Generate lightweight deterministic leaf positions
  const leavesData = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 1.2 + (i % 3) * 0.35;
      const y = -0.7 + (i % 4) * 0.4;
      return {
        position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius] as [number, number, number],
        rotation: [(i * 0.4) % Math.PI, (i * 0.8) % Math.PI, (i * 0.3) % Math.PI] as [number, number, number],
        scale: 0.12 + (i % 2) * 0.05,
      };
    });
  }, [count]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {leavesData.map((leaf, index) => (
        <mesh
          key={index}
          position={leaf.position}
          rotation={leaf.rotation}
          scale={[leaf.scale * 1.5, leaf.scale * 0.3, leaf.scale * 2.2]}
        >
          {/* Subtle curved leaf geometry representation */}
          <coneGeometry args={[0.3, 1, 5]} />
          <meshStandardMaterial
            color={currentCategory.visualMood.primaryColor}
            roughness={0.6}
            metalness={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}
