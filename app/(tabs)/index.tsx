import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Tambahkan Komponen Baru */}
      <View style={styles.centeredContainer}>
        <Text style={styles.centeredText}>Bang berarti ini yang di ubah bagian index aja?</Text>
        <Text style={styles.centeredText}>kek gini udah bisa la ya!</Text>

        <View style={styles.boxContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
        </View>
      </View>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  /* Tambahkan Styles Baru */
  centeredContainer: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Warna abu-abu terang
    justifyContent: 'center',  // Pusatkan secara vertikal
    alignItems: 'center',      // Pusatkan secara horizontal
    padding: 16,               // Jarak antar elemen
  },
  centeredText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak dengan kotak di bawah
  },
  boxContainer: {
    flexDirection: 'row',        // Susunan horizontal
    justifyContent: 'space-between', // Jarak merata
    width: '100%',               // Lebar area kotak
    paddingHorizontal: 32,       // Jarak dari tepi layar
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',      // Warna kotak 1
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'black',    // Warna kotak 2
  },
});
