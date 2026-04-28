import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
        // Esconde o Header
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          title: 'Produtos',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Button title="Logout" onPress={() => navigation.replace('Login')} color="red" />
          ),
          headerRight: () => (
            <Button title="Info" onPress={() => navigation.navigate('GroupInfo')} />
          ),
        })}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
      <Stack.Screen name="GroupInfo" component={GroupInfoScreen} options={{ title: 'Informações do Grupo' }} />
    </Stack.Navigator>
  );
}