import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { AppColors, Radii, Shadows } from '@/constants/app-theme';
import { GradientShell } from '@/components/design/GradientShell';
import { NeonButton } from '@/components/design/NeonButton';
import { discoveryProfiles } from '@/features/discovery/data/mockProfiles';
import { onboardingQuestions } from '@/features/onboarding/data/questions';

const activeProfile = discoveryProfiles[0];

export default function DiscoverScreen() {
  const glow = useSharedValue(0.55);
  const rise = useSharedValue(18);

  useEffect(() => {
    glow.value = withRepeat(withSequence(withTiming(1, { duration: 1500 }), withTiming(0.55, { duration: 1500 })), -1, true);
    rise.value = withDelay(300, withTiming(0, { duration: 650 }));
  }, [glow, rise]);

  const logoStyle = useAnimatedStyle(() => ({
    opacity: glow.value,
    transform: [{ scale: 0.94 + glow.value * 0.08 }],
  }));

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: rise.value }],
    opacity: rise.value === 0 ? 1 : 0.96,
  }));

  return (
    <GradientShell>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Animated.View style={[styles.logo, logoStyle, Shadows.glowPink]}>
            <Ionicons name="sparkles" size={28} color={AppColors.white} />
          </Animated.View>
          <Text style={styles.kicker}>DateRight</Text>
          <Text style={styles.title}>Match through emotional signal, not surface noise.</Text>
          <Text style={styles.subtitle}>
            Discover people by intention, communication rhythm, and the words they choose when nobody is performing.
          </Text>
        </View>

        <View style={styles.onboardingCard}>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.eyebrow}>{onboardingQuestions[0].eyebrow}</Text>
          <Text style={styles.question}>{onboardingQuestions[0].question}</Text>
          <View style={styles.chips}>
            {onboardingQuestions[0].options.map((option) => (
              <Pressable key={option} style={styles.chip}>
                <Text style={styles.chipText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Animated.View style={[styles.matchStack, cardStyle]}>
          <View style={[styles.backCard, styles.backCardOne]} />
          <View style={[styles.backCard, styles.backCardTwo]} />
          <View style={styles.matchCard}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardName}>
                  {activeProfile.name}, {activeProfile.age}
                </Text>
                <Text style={styles.cardMeta}>{activeProfile.city} · {activeProfile.archetype}</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.score}>{activeProfile.compatibility}</Text>
                <Text style={styles.scoreLabel}>chem</Text>
              </View>
            </View>

            <Text style={styles.prompt}>{activeProfile.prompt}</Text>
            <Text style={styles.answer}>{activeProfile.answer}</Text>

            <View style={styles.tags}>
              {activeProfile.tags.map((tag) => (
                <Text key={tag} style={styles.tag}>{tag}</Text>
              ))}
            </View>

            <View style={styles.insightBox}>
              <Ionicons name="pulse" size={18} color={AppColors.cyan} />
              <Text style={styles.insight}>{activeProfile.insight}</Text>
            </View>

            <View style={styles.actions}>
              <NeonButton muted icon="close" label="Pass" style={styles.actionButton} />
              <NeonButton icon="chatbubble-ellipses" label="Answer their line" style={styles.actionButton} />
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </GradientShell>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 120,
    gap: 22,
  },
  hero: {
    gap: 12,
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: AppColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kicker: {
    color: AppColors.pink,
    fontWeight: '900',
    letterSpacing: 0,
    fontSize: 14,
  },
  title: {
    color: AppColors.white,
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '900',
  },
  subtitle: {
    color: AppColors.muted,
    fontSize: 15,
    lineHeight: 23,
  },
  onboardingCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.14)',
    borderWidth: 1,
    borderRadius: Radii.lg,
    padding: 18,
    gap: 12,
  },
  progressTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  progressFill: {
    width: '34%',
    height: 5,
    backgroundColor: AppColors.pink,
  },
  eyebrow: {
    color: AppColors.violet,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  question: {
    color: AppColors.white,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '800',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    backgroundColor: 'rgba(255,255,255,0.07)',
  },
  chipText: {
    color: AppColors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  matchStack: {
    marginTop: 10,
  },
  backCard: {
    position: 'absolute',
    left: 14,
    right: 14,
    height: 420,
    borderRadius: Radii.xl,
    backgroundColor: AppColors.panelSoft,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  backCardOne: {
    top: 16,
    opacity: 0.55,
  },
  backCardTwo: {
    top: 32,
    left: 28,
    right: 28,
    opacity: 0.28,
  },
  matchCard: {
    minHeight: 420,
    borderRadius: Radii.xl,
    backgroundColor: AppColors.panel,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    padding: 20,
    gap: 18,
    ...Shadows.glowPurple,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardName: {
    color: AppColors.white,
    fontSize: 24,
    fontWeight: '900',
  },
  cardMeta: {
    color: AppColors.muted,
    marginTop: 4,
    fontSize: 13,
  },
  scoreBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,79,216,0.16)',
    borderColor: AppColors.pink,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    color: AppColors.white,
    fontSize: 22,
    fontWeight: '900',
  },
  scoreLabel: {
    color: AppColors.pink,
    fontSize: 10,
    fontWeight: '800',
  },
  prompt: {
    color: AppColors.violet,
    fontSize: 14,
    fontWeight: '800',
  },
  answer: {
    color: AppColors.white,
    fontSize: 25,
    lineHeight: 34,
    fontWeight: '800',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    color: AppColors.muted,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: '700',
  },
  insightBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'rgba(83,224,255,0.1)',
    borderRadius: Radii.md,
    padding: 14,
  },
  insight: {
    color: AppColors.white,
    flex: 1,
    lineHeight: 20,
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 'auto',
  },
  actionButton: {
    flex: 1,
  },
});
