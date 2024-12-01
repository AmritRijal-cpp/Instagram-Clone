import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    "Roboto-Black": require('../assets/fonts/Roboto-Black.ttf'),
    "Roboto-BlackItalic": require('../assets/fonts/Roboto-BlackItalic.ttf'),
    "Roboto-Bold": require('../assets/fonts/Roboto-Bold.ttf'),
    "Roboto-BoldItalic": require('../assets/fonts/Roboto-BoldItalic.ttf'),
    "Roboto-Italic": require('../assets/fonts/Roboto-Italic.ttf'),
    "Roboto-Light": require('../assets/fonts/Roboto-Light.ttf'),
    "Roboto-LightItalic": require('../assets/fonts/Roboto-LightItalic.ttf'),
    "Roboto-Medium": require('../assets/fonts/Roboto-Medium.ttf'),
    "Roboto-MediumItalic": require('../assets/fonts/Roboto-MediumItalic.ttf'),
    "Roboto-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Thin": require('../assets/fonts/Roboto-Thin.ttf'),
    "Roboto-ThinItalic": require('../assets/fonts/Roboto-ThinItalic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    if (error) {
      console.error("Error loading fonts: ", error);
      throw error;
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
