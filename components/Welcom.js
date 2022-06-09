import React from "react";
import { View, Button, Text, StyleSheet, ImageBackground, Image } from "react-native";
import BaseButton from "./BaseButton";


export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
      source={require("../assets/back1.jpg")}
    >
      <View style={styles.content}>
        <Image style={styles.image} source={require("../assets/logo-removebg.png")} />
        <Text style={styles.text}>To protect and To serve</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <BaseButton title="login" onPress={() => navigation.navigate('LoginScreen')} />
        <BaseButton title="register" color="secondary"  mode="contained"
          onPress={() => navigation.navigate('RegisterScreen')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 120,
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    color : "white"
  },
  buttonsContainer: {
    padding: 20,
  },
});