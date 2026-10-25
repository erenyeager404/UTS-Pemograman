import React from 'react';
import { Text, Alert, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  return (
    <View style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <Text style={styles.section}>Soal 1: InfoCard</Text>

        <InfoCard
          title="Tugas Lab Pemrograman Mobile"
          status="selesai"
          onPress={() => Alert.alert('Detail', 'Tugas Lab Pemrograman Mobile: Selesai')}
        />
        <InfoCard
          title="Laporan Proyek Akhir"
          status="proses"
          onPress={() => Alert.alert('Detail', 'Laporan Proyek Akhir: Proses')}
        />

        <Text style={styles.section}>Soal 2: Pencarian Mahasiswa</Text>
        <View style={styles.directory}>
          <DirektoriMahasiswa />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f2f4f8' },
  content: { flex: 1, padding: 16, paddingTop: 40 },
  section: { fontSize: 18, fontWeight: '700', marginVertical: 10, color: '#1f4e9c' },
  directory: { flex: 1 },
});