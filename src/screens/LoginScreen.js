import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { authUser } from '../services/authService';

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({ username: "", password: "" });



  const handleLogin = async () => {
    try {
      const response = await authUser(formData)
      if (data && data.token) {
      navigation.replace('Home');
      } else {
      throw new Error("Usuário ou senha inválido")
}
    } catch (error) {
      console.log('Erro na autenticação: ', error.message)
    }
  };

  return (
    <View style={styles.container}>
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
