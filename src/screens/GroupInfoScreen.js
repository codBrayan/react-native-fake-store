import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GroupInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Group Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});