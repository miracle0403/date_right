import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientShell } from '@/components/design/GradientShell';
import { AppColors, Radii, Shadows } from '@/constants/app-theme';
import { archetypes } from '@/features/matching/domain/personaEngine';

const tags = ['emotionally available', 'slow burn', 'direct repair', 'deep questions', 'values consistency'];
const values = ['Accountability', 'Warm honesty', 'Mutual effort', 'Secure pacing'];

export default function ProfileScreen() {
  return (
    <GradientShell>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.identity}>
          <View style={[styles.portrait, Shadows.glowPink]}>
            <Text style={styles.initials}>DR</Text>
          </View>
          <Text style={styles.name}>Your emotional profile</Text>
          <Text style={styles.bio}>A personality-first identity built from intention, behaviour, and conversational energy.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vibe tags</Text>
          <View style={styles.tags}>
            {tags.map((tag) => (
              <Text key={tag} style={styles.tag}>{tag}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Relationship values</Text>
          {values.map((value) => (
            <View key={value} style={styles.valueRow}>
              <Ionicons name="checkmark-circle" size={21} color={AppColors.green} />
              <Text style={styles.valueText}>{value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Persona library</Text>
          <Text style={styles.libraryCopy}>37 archetypes power the evolving behavioural model.</Text>
          <View style={styles.archetypeGrid}>
            {archetypes.slice(0, 10).map((item) => (
              <Text key={item} style={styles.archetype}>{item}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </GradientShell>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 66,
    paddingBottom: 120,
    gap: 18,
  },
  identity: {
    alignItems: 'center',
    gap: 12,
  },
  portrait: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: AppColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  initials: {
    color: AppColors.white,
    fontSize: 30,
    fontWeight: '900',
  },
  name: {
    color: AppColors.white,
    fontSize: 29,
    fontWeight: '900',
    textAlign: 'center',
  },
  bio: {
    color: AppColors.muted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  section: {
    borderRadius: Radii.xl,
    backgroundColor: AppColors.panel,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    padding: 18,
    gap: 13,
  },
  sectionTitle: {
    color: AppColors.white,
    fontSize: 19,
    fontWeight: '900',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },
  tag: {
    color: AppColors.white,
    backgroundColor: 'rgba(255,79,216,0.13)',
    borderColor: 'rgba(255,79,216,0.26)',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 9,
    fontSize: 12,
    fontWeight: '800',
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 3,
  },
  valueText: {
    color: AppColors.white,
    fontSize: 15,
    fontWeight: '800',
  },
  libraryCopy: {
    color: AppColors.muted,
    lineHeight: 20,
  },
  archetypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  archetype: {
    color: AppColors.muted,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: '700',
  },
});
