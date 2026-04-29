import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoScreen() {
  const fellasBro = [
    { nome: "Brayan", ra: "1132051" },
    { nome: "Rafaela Bilibio", ra: "1137885" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Desenvolvedores do App</Text>
      {fellasBro.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text>RA: {item.ra}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  nome: { fontWeight: 'bold', fontSize: 16 }
});