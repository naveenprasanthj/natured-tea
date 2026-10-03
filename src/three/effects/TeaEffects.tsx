/**
 * TeaEffects: Structural placeholder for future post-processing layer
 * (e.g. subtle depth of field, bloom, or vignette).
 * Keeps effects decoupled from core scene objects and respects low-power tiers.
 */
interface TeaEffectsProps {
  enabled?: boolean;
}

export function TeaEffects({ enabled = true }: TeaEffectsProps) {
  if (!enabled) return null;

  // Placeholder: Returns null in the initial minimal foundation
  // to avoid loading heavy post-processing passes prematurely.
  return null;
}
