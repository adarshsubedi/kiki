import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/components/Screens/WelcomeScreen';
import LoginScreen from './src/components/Screens/LoginScreen';
import SignupScreen from './src/components/Screens/SignupScreen';
import Location from './src/components/Screens/Location';
import Experience from './src/components/Screens/Experience';
import Love from './src/components/Screens/Love';
import Organizer from './src/components/Screens/Organizer';
import Congratulations from './src/components/Screens/Congratulations';

const Stack = createNativeStackNavigator();


const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Location' component={Location} options={{ headerShown: false }} />
        <Stack.Screen name='Experience' component={Experience} options={{ headerShown: false }} />
        <Stack.Screen name='Love' component={Love} options={{ headerShown: false }} />
        <Stack.Screen name='Organizer' component={Organizer} options={{ headerShown: false }} />
        <Stack.Screen name='Congratulations' component={Congratulations} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})

export default App;