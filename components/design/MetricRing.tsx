import { StyleSheet, Text, View } from 'react-native';
import { AppColors } from '@/constants/app-theme';

type Props = {
  value: number;
  label: string;
  color?: string;
};

export function MetricRing({ value, label, color = AppColors.pink }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={[styles.ring, { borderColor: color }]}>
        <Text style={styles.value}>{value}%</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    gap: 10,
    width: 96,
  },
  ring: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    color: AppColors.white,
    fontSize: 20,
    fontWeight: '900',
  },
  label: {
    color: AppColors.muted,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});
