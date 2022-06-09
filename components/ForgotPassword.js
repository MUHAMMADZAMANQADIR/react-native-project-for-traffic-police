import React, { memo, useState,useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import { passwordValidator, emailValidator } from './utils';
 
import Background from './Background';

import Logo from './Logo';
import Header from './Header';
import TextInput from './TextInput';
import { theme } from  "./theme";
import Button from './Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Firebase from '../firebase';
const auth = Firebase.auth();
const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    
     Firebase.auth().sendPasswordResetEmail(email.value)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
    
  };
  const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('mail');
    if (value !== null) {
     setEmail({ value: value, error: '' })
       
    }
  } catch (error) {
    // Error retrieving data
  }
};
  useEffect(() => {
    retrieveData()
  });

  return (
    <Background>
       

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
 

      <Button mode="contained" onPress={_onSendPressed} style={styles.button} >
         Reset Password
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
   
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  
});

export default ForgotPasswordScreen;