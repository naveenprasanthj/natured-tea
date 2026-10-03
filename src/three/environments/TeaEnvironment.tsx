import { TeaCategoryKey } from '@/types';
import { TEA_CATEGORIES } from '@/data/teas';

interface TeaEnvironmentProps {
  categoryKey?: TeaCategoryKey;
}

export function TeaEnvironment({ categoryKey = 'green-tea' }: TeaEnvironmentProps) {
  const currentCategory = TEA_CATEGORIES[categoryKey] || TEA_CATEGORIES['green-tea'];
  const { primaryColor, ambientLight } = currentCategory.visualMood;

  return (
    <>
      {/* Soft atmospheric ambient light */}
      <ambientLight intensity={0.4} color={ambientLight} />

      {/* Main directional key light */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.2}
        color="#fffaf0"
        castShadow
      />

      {/* Rim light reflecting category character */}
      <directionalLight
        position={[-4, 2, -3]}
        intensity={0.6}
        color={primaryColor}
      />

      {/* Soft fill light from below */}
      <pointLight position={[0, -2, 2]} intensity={0.3} color="#dfdfdf" />
    </>
  );
}
