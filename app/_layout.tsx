import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AppColors } from '@/constants/app-theme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const dateRightTheme = {
    dark: true,
    colors: {
      primary: AppColors.pink,
      background: AppColors.ink,
      card: AppColors.panel,
      text: AppColors.white,
      border: 'rgba(255,255,255,0.12)',
      notification: AppColors.pink,
    },
    fonts: {
      regular: { fontFamily: 'System', fontWeight: '400' as const },
      medium: { fontFamily: 'System', fontWeight: '600' as const },
      bold: { fontFamily: 'System', fontWeight: '700' as const },
      heavy: { fontFamily: 'System', fontWeight: '900' as const },
    },
  };

  return (
    <ThemeProvider value={dateRightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
