import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReminderScreen from '../screens/ReminderScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Hatırlatıcılar' }}
        />
        <Stack.Screen
          name="Reminder"
          component={ReminderScreen}
          options={{ title: 'Yeni Hatırlatıcı' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
