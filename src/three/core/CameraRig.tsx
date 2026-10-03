import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  intensity?: number;
}

export function CameraRig({ intensity = 0.5 }: CameraRigProps) {
  const targetVec = useRef(new THREE.Vector3());

  useFrame((state) => {
    // Subtle, slow responsiveness to pointer coordinates
    const pointer = state.pointer;
    const targetX = pointer.x * intensity * 0.4;
    const targetY = pointer.y * intensity * 0.2 + 0.5;

    targetVec.current.set(targetX, targetY, 4.5);
    state.camera.position.lerp(targetVec.current, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
