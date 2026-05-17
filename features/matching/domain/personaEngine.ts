export type EmotionalBand = 'Giver' | 'Neutral' | 'Taker';
export type IntentionGroup =
  | 'Serious relationship'
  | 'Exploring carefully'
  | 'Emotionally unavailable'
  | 'Validation seeking'
  | 'Commitment-driven';

export type PersonaProfile = {
  archetype: string;
  intention: IntentionGroup;
  band: EmotionalBand;
  empathy: number;
  reciprocity: number;
  consistency: number;
  accountability: number;
  depth: number;
};

export const archetypes = [
  'Empath',
  'Avoidant',
  'Anxious attachment',
  'Emotionally mature',
  'Validation seeker',
  'Opportunist',
  'Genuine giver',
  'Commitment-driven',
  'Slow burner',
  'Direct communicator',
  'Reflective romantic',
  'Secure connector',
  'Boundary builder',
  'Conversation alchemist',
  'Protective idealist',
  'Analytical lover',
  'Playful empath',
  'High-intent dater',
  'Soft strategist',
  'Accountable partner',
  'Reassurance seeker',
  'Conflict avoider',
  'Emotional minimalist',
  'Intensity chaser',
  'Stability seeker',
  'Independent nurturer',
  'Curious listener',
  'Hopeful realist',
  'Reciprocity mapper',
  'Honesty anchored',
  'Unavailable romantic',
  'Caretaker',
  'Depth seeker',
  'Manipulation risk',
  'Chemistry-first',
  'Loyal builder',
  'Calm communicator',
];

export function compatibilityScore(profile: PersonaProfile) {
  const weighted =
    profile.empathy * 0.24 +
    profile.reciprocity * 0.22 +
    profile.consistency * 0.2 +
    profile.accountability * 0.2 +
    profile.depth * 0.14;

  const bandAdjustment = profile.band === 'Giver' ? 4 : profile.band === 'Neutral' ? 0 : -8;
  const intentionAdjustment =
    profile.intention === 'Commitment-driven' || profile.intention === 'Serious relationship'
      ? 5
      : profile.intention === 'Validation seeking'
        ? -12
        : 0;

  return Math.max(0, Math.min(99, Math.round(weighted + bandAdjustment + intentionAdjustment)));
}
