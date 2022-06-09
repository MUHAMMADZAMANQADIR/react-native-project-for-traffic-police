
import React, {useState ,useEffect} from 'react';
import { TextInput, Image, StyleSheet, TouchableOpacity, ScrollView,Alert, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
 




const  CheckHistery = ({ navigation }) => {
  const [getEList, setEList] = useState();
  return (
    <View >
          <View >
            {getEList.map((item, index) => (
              <View
                key={item.key}
                 
                style={{
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 50,
                    margin:5,
                
                  }}
                >
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    paddingRight: 15,
                  }}>
                  {item.name} 
                  {item.price}
                </Text>
              </View>
            ))}
          </View>
    </View>
  );
};

export default CheckHistery;