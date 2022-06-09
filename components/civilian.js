import React, {useState ,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { TextInput,Box, Image, StyleSheet, TouchableOpacity, ScrollView,Alert, Button, View, Text } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import Data from "./data"
import { Searchbar } from 'react-native-paper';
import { db } from '../firebase'


export default function  Civilian({ navigation }) {
    const [personinfo, setpersoninfo] = useState({
    image: '',
    name:'',
    cnic:'',
    address:'',
    phone:'',
    driveing:'',
    licencetype:'',
    issurdate: '',
    licenceid:'',
    crimehistery:""
  });
  
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = useState([]);

/**
 *  setpersoninfo.name(obj.name)
     setpersoninfo.cnic(obj.cnic)
     setpersoninfo.image(obj.image)
     setpersoninfo.address(obj.address)
     setpersoninfo.phone(obj.phone)
     setpersoninfo.driveing(obj.driveing)
     setpersoninfo.licencetype(obj.licencetype)
     setpersoninfo.issurdate(obj.issurdate)
     setpersoninfo.licenceid(obj.licenceid)
     setpersoninfo.crimehistery(obj.crimehistery)  
 */

useEffect(() => {
     getinfo();
  }, []);
  const getinfo = async () => {
    console.log(searchQuery)
    db.collection("Civilian").search('cnic' == searchQuery ).than(
    console.log(1) )  
  }
    return(
      <View>
      <Searchbar
      placeholder="Search"
      onChangeText={text => setSearchQuery(text)}
      onIconPress={getinfo}
      value={searchQuery}
      />
      <ScrollView>
       
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
        <Text >
          Person Image
      </Text>
      </View>
     
       
     </View>  
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5  }}>Name:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={personinfo.name}
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>CNIC:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={personinfo.cnic}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5 }}>Address:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          maxLength={4}
          keyboardType="numeric"
          value={personinfo.address}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Phone No:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={personinfo.phone}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Have Driving Licence?</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={personinfo.driveing}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Licence Type:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={personinfo.licencetype}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Licence Issue Date:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={personinfo.issurdate}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10,}}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Licence Issue ID:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={personinfo.licenceid}
        />
      </View>
      <View style={{ margin: 5, padding: 10,}}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Crime Histery:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={personinfo.licenceid}
        />
      </View>

      <View style={{ margin: 15, padding: 10,}}>
        
      </View>
      
    </ScrollView>
    </View>
    );
};