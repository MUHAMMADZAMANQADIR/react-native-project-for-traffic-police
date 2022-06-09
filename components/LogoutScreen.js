import React, { memo } from 'react';
import Background from './Background';
import Logo from './Logo';
import Header from './Header';
import Button from './Button';
import Paragraph from './Paragraph'
import Firebase from '../firebase';
const auth = Firebase.auth();
 
const LogoutScreen = ({ navigation }) => {

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("successfully logged out")
        navigation.navigate('Welcome')
      })
      .catch(error => alert(error.message))
  }
  return(
  <Background>
    <Logo /> 
    <Header>Let’s close MDC</Header>
    <Paragraph>
      Your are amazing, Thanks for coming!  
    </Paragraph>
    <Button mode="outlined" onPress={handleSignOut}>
      Logout
    </Button>
  </Background>
)};

export default LogoutScreen;