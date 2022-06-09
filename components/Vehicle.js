import React, {useState ,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { TextInput,Box, Image, StyleSheet, TouchableOpacity, ScrollView,Alert, Button, View, Text, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Ionicons} from '@expo/vector-icons';

export default function Vehicle() {
    const [vehicleinfo, setvehicleinfo] = useState({
    model: '',
    number:'',
    color:'',
    seats:'',
    ownerName:'',
    ownerCNIC:'',
    year:'',
  });
   
const [data, setData] = useState([]);
 
 useEffect(() => {
     
  }, []);
  
 
    return(
      <View> 
      <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
         Vehicle Profile
      </Text>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5  }}>Model:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={vehicleinfo.model}
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Registration Number:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={vehicleinfo.number}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5 }}>Color:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={vehicleinfo.color}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5 }}>Seats:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={vehicleinfo.seats}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Owned By:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={vehicleinfo.ownerName}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Owner CNIC:</Text>
        <TextInput
          editable={false}
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={vehicleinfo.ownerCNIC}
          
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        }}>
        <Button title="search" ></Button>
      </View>
    </ScrollView>
    </View>
    );
};