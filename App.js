import React, {useState} from 'react';
import { TextInput, TouchableOpacity, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/Welcom'
import RegisterScreen from "./components/RegisterScreen"
import LoginScreen from "./components/Login"
import MyComponen from "./components/Home"
import ForgotPasswordScreen from "./components/ForgotPassword"
import LogoutScreen from './components/LogoutScreen'
import { auth } from './firebase'
import Civilian from "./components/civilian"
import CheckHistery from "./components/CrimeHistery"

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
      
      <Stack.Navigator >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}

        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}  />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="logout" component={LogoutScreen} />
        <Stack.Screen name="HomeScreen" component={MyComponen} options={{ headerShown: false }} />
        <Stack.Screen name="CivilianScreen" component={Civilian} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
