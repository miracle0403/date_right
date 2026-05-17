import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppColors } from '@/constants/app-theme';

export function GradientShell({ children }: PropsWithChildren) {
  return (
    <View style={styles.shell}>
      <View style={styles.topWash} />
      <View style={styles.bottomWash} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: AppColors.ink,
    overflow: 'hidden',
  },
  topWash: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: AppColors.navy,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    opacity: 0.9,
  },
  bottomWash: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 180,
    backgroundColor: 'rgba(138,92,255,0.16)',
  },
});
