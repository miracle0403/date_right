import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientShell } from '@/components/design/GradientShell';
import { MetricRing } from '@/components/design/MetricRing';
import { AppColors, Radii } from '@/constants/app-theme';
import { discoveryProfiles } from '@/features/discovery/data/mockProfiles';
import { rotatingRefinementQuestions } from '@/features/onboarding/data/questions';

const profile = discoveryProfiles[0];

export default function CompatibilityScreen() {
  return (
    <GradientShell>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Compatibility engine</Text>
          <Text style={styles.title}>Your emotional pattern is getting sharper.</Text>
          <Text style={styles.subtitle}>Scores evolve from onboarding, interaction quality, and three-day behavioural check-ins.</Text>
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.cardLabel}>Current persona</Text>
          <Text style={styles.persona}>{profile.archetype}</Text>
          <View style={styles.bandRow}>
            <Ionicons name="heart-circle" size={22} color={AppColors.pink} />
            <Text style={styles.band}>{profile.band} · {profile.intention}</Text>
          </View>
          <View style={styles.rings}>
            <MetricRing value={profile.empathy} label="Empathy" />
            <MetricRing value={profile.reciprocity} label="Reciprocity" color={AppColors.violet} />
            <MetricRing value={profile.consistency} label="Consistency" color={AppColors.cyan} />
          </View>
        </View>

        <View style={styles.grid}>
          <InsightCard icon="sync" title="3-day refinement" body="Micro questions recalibrate intent, maturity, honesty, and dependency signals." />
          <InsightCard icon="shield-checkmark" title="Safety filter" body="Conflicting intentions and low-accountability profiles are deprioritized before discovery." />
          <InsightCard icon="analytics" title="Interaction analysis" body="Depth, response consistency, initiation, and reciprocity adjust compatibility over time." />
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.cardLabel}>Next reflection</Text>
          <Text style={styles.reflection}>{rotatingRefinementQuestions[2]}</Text>
        </View>
      </ScrollView>
    </GradientShell>
  );
}

function InsightCard({ icon, title, body }: { icon: keyof typeof Ionicons.glyphMap; title: string; body: string }) {
  return (
    <View style={styles.insightCard}>
      <Ionicons name={icon} size={22} color={AppColors.pink} />
      <Text style={styles.insightTitle}>{title}</Text>
      <Text style={styles.insightBody}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 66,
    paddingBottom: 120,
    gap: 18,
  },
  header: {
    gap: 10,
  },
  kicker: {
    color: AppColors.pink,
    fontSize: 13,
    fontWeight: '900',
  },
  title: {
    color: AppColors.white,
    fontSize: 32,
    lineHeight: 37,
    fontWeight: '900',
  },
  subtitle: {
    color: AppColors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  heroCard: {
    borderRadius: Radii.xl,
    backgroundColor: AppColors.panel,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    padding: 20,
    gap: 16,
  },
  cardLabel: {
    color: AppColors.violet,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  persona: {
    color: AppColors.white,
    fontSize: 30,
    fontWeight: '900',
  },
  bandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  band: {
    color: AppColors.muted,
    fontWeight: '800',
  },
  rings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  grid: {
    gap: 12,
  },
  insightCard: {
    borderRadius: Radii.lg,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    padding: 18,
    gap: 8,
  },
  insightTitle: {
    color: AppColors.white,
    fontSize: 17,
    fontWeight: '900',
  },
  insightBody: {
    color: AppColors.muted,
    lineHeight: 20,
    fontSize: 13,
  },
  questionCard: {
    borderRadius: Radii.lg,
    backgroundColor: 'rgba(255,79,216,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,79,216,0.28)',
    padding: 18,
    gap: 10,
  },
  reflection: {
    color: AppColors.white,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '800',
  },
});
