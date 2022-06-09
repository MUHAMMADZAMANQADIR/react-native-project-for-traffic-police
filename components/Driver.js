import React, {useState ,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { TextInput,Box, Image, StyleSheet, TouchableOpacity, ScrollView,Alert, Button, View, Text } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import Data from "./data"
import { Searchbar } from 'react-native-paper';
import { db } from '../firebase'
import {
  ActivityIndicator,
  Share,
  StatusBar,
  Dimensions,
  CameraRoll,
} from 'react-native';
import { Constants, Permissions } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'uuid';

export default function Driver({ navigation }) {
    const [personinfo, setpersoninfo] = useState({
    image: '',
    name:' ',
    cnic:'',
    address:'',
    phone:'',
    driveing:'',
    licencetype:'',
    issurdate: '',
    licenceid:'',
    crimehistery:""
  });

const  componentDidMount= async()=> {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
}
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = useState([]);
   
 useEffect(() => {
     adddate();
  },);
 
 const takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log("taking a photo");
    
  };

  const pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log("just picking... ");  
    this._handleImagePicked(pickerResult);
  };
 

const adddate = ()=>{
       db.collection("Civilian").add({
            image: personinfo.image,
            name: personinfo.name,
            cnic: personinfo.cnic,
            address: personinfo.address,
            phone: personinfo.phone,
            driveing: personinfo.driveing,
            licencetype:personinfo.licencetype,
            issurdate: personinfo.issurdate,
            licenceid: personinfo.licenceid,
            crimehistery: personinfo.crimehistery
        })
        .then(() =>{
            alert('Your message has been sent')

        })
        .catch((error)=>{
            alert(error.message);
        })
  }
 const onChangeSearch = query => setSearchQuery(query);
    return(
      <View>
      <ScrollView>
      <Button onPress={adddate} title="Add" ></Button>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
         Civilian Personal Info
      </Text>
     <View style={{flexDirections: 'Row'}} >
      <View  style={{borderWidth: 5, margin: 10, width: 110,
              height: 110, textAlign: 'center'}}>
         <Image
            style={{
              width: 100,
              height: 100,
              marginBottom: 5
            }}
            source={personinfo.image}
         />
        <TouchableOpacity onPress={takePhoto} >
           <Text> Upload Image</Text>
      </TouchableOpacity>
      </View>
     
       
     </View>  
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5  }}>Name:</Text>
        <TextInput
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          onChangeText={text => setpersoninfo(text)}

        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>CNIC:</Text>
        <TextInput
         style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
         onChangeText={text => setpersoninfo.cnic({ value: text })}
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5 }}>Address:</Text>
        <TextInput
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          onChangeText={text => setpersoninfo.address({ value: text })}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Phone No:</Text>
        <TextInput
           
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          onChangeText={text => setpersoninfo.phone({ value: text })}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Have Driving Licence?</Text>
        <TextInput
           
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          onChangeText={text => setpersoninfo.driveing({ value: text })}
          
        />
      </View>

      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Licence Type:</Text>
        <TextInput
         
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          onChangeText={text => setpersoninfo.licencetype({ value: text })}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Licence Issue Date:</Text>
        <TextInput

          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={personinfo.issurdate}
        />
      </View>
      <View style={{ margin: 5, padding: 10,}}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Licence Issue ID:</Text>
        <TextInput
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
           onChangeText={text => setpersoninfo.issurdate({ value: text })}
        />
      </View>
      <Button title="Add Driver" onPress={adddate} ></Button>
      <View style={{ margin: 15, padding: 10,}}>
      </View>
    </ScrollView>
    </View>
    );
};