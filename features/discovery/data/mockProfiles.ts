import { compatibilityScore, PersonaProfile } from '@/features/matching/domain/personaEngine';

export type DiscoveryProfile = PersonaProfile & {
  id: string;
  name: string;
  age: number;
  city: string;
  prompt: string;
  answer: string;
  tags: string[];
  insight: string;
};

const profiles: DiscoveryProfile[] = [
  {
    id: 'nova',
    name: 'Nova',
    age: 29,
    city: 'Lagos',
    archetype: 'Secure connector',
    intention: 'Commitment-driven',
    band: 'Giver',
    empathy: 91,
    reciprocity: 88,
    consistency: 84,
    accountability: 92,
    depth: 89,
    prompt: 'A sentence that reveals emotional maturity to me is...',
    answer: 'I can be wrong and still be worth loving, so I try to repair quickly.',
    tags: ['slow burn', 'clear communicator', 'values depth'],
    insight: 'Strong repair instinct and high emotional effort. Good fit for serious pacing.',
  },
  {
    id: 'amara',
    name: 'Amara',
    age: 27,
    city: 'Abuja',
    archetype: 'Depth seeker',
    intention: 'Serious relationship',
    band: 'Giver',
    empathy: 87,
    reciprocity: 82,
    consistency: 79,
    accountability: 86,
    depth: 94,
    prompt: 'I know a conversation has chemistry when...',
    answer: 'We both start telling the truth without performing confidence.',
    tags: ['emotionally curious', 'intentional', 'soft honesty'],
    insight: 'High depth and empathy. Compatibility improves with patient consistency.',
  },
  {
    id: 'zain',
    name: 'Zain',
    age: 31,
    city: 'Accra',
    archetype: 'Direct communicator',
    intention: 'Exploring carefully',
    band: 'Neutral',
    empathy: 76,
    reciprocity: 73,
    consistency: 80,
    accountability: 78,
    depth: 71,
    prompt: 'The green flag I notice fastest is...',
    answer: 'Someone saying what they need without making me guess.',
    tags: ['direct', 'grounded', 'low drama'],
    insight: 'Stable communication profile. Best matched with clear expectation setting.',
  },
];

export const discoveryProfiles = profiles.map((profile) => ({
  ...profile,
  compatibility: compatibilityScore(profile),
}));
