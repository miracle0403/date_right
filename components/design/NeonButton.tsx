import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { AppColors, Radii, Shadows } from '@/constants/app-theme';

type Props = {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  style?: ViewStyle;
  muted?: boolean;
};

export function NeonButton({ label, icon, onPress, style, muted }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        muted && styles.muted,
        pressed && styles.pressed,
        !muted && Shadows.glowPink,
        style,
      ]}>
      {icon ? <Ionicons name={icon} size={18} color={AppColors.white} /> : null}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: Radii.lg,
    backgroundColor: AppColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 18,
  },
  muted: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.88,
  },
  label: {
    color: AppColors.white,
    fontSize: 15,
    fontWeight: '800',
  },
});
