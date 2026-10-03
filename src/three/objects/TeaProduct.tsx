import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TeaCategoryKey } from '@/types';
import { TEA_CATEGORIES } from '@/data/teas';

interface TeaProductProps {
  categoryKey?: TeaCategoryKey;
}

export function TeaProduct({ categoryKey = 'green-tea' }: TeaProductProps) {
  const meshRef = useRef<THREE.Group>(null);
  const currentCategory = TEA_CATEGORIES[categoryKey] || TEA_CATEGORIES['green-tea'];

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Very slow and subtle rotation
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.2, 0]}>
      {/* Structural Minimal Canister Body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 1.8, 48]} />
        <meshStandardMaterial
          color="#161816"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Structural Minimal Canister Lid */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.12, 48]} />
        <meshStandardMaterial
          color="#222623"
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>

      {/* Subtle Category Accent Band */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.705, 0.705, 0.4, 48]} />
        <meshStandardMaterial
          color={currentCategory.visualMood.primaryColor}
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
