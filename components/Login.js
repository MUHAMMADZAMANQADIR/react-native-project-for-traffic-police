import React, {  useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from './Background';
import Logo from './Logo';
import Header from './Header';
import Button from './Button';
import TextInput from './TextInput';
import Firebase from '../firebase';
const auth = Firebase.auth();
//import { auth } from '../firebase'
import { theme } from './theme';
import { emailValidator, passwordValidator } from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

 

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
      try {
      if (email.value != '' && password.value != '') {
        auth.
        signInWithEmailAndPassword(email.value, password.value).
        then(() => {navigation.navigate('HomeScreen')}
        ).catch(() => alert('error'))
        
      }
    } catch (error) {
       console.lo(error.message);
    }

   
  };

  const  addemail = async () => {
     
    try {
      const a = await AsyncStorage.setItem('mail',email.value );
      navigation.navigate('forgotPassword')
      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Background>
     

      <Logo />

      <Header>Welcome</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={addemail}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;