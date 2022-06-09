import React, {useState ,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { TextInput,Box, Image, StyleSheet, TouchableOpacity, ScrollView,Alert, Button, View, Text, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Ionicons} from '@expo/vector-icons';
 
import { Searchbar } from 'react-native-paper';


export default function BOLO() {
    const [bolo, setBolo] = useState([]);
    const [boloDesc, setBoloDesc] = useState('');
    const [reportinfo, setreportinfo] = useState({
    name: '',
    cnic: '',
    reportDate:'',
    comments:'',
    charges:[''],
  });
  const [searchQuery, setSearchQuery] = React.useState('');
  const [date, setDate] = useState('04-01-2022');
  const setCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return setDate(date + '-' + month + '-' + year);//format: dd-mm-yyyy;
}
  const getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

       if ((date/10)<1)
        date = "0" + date;
      if ((month/10)<1)
        month = "0" + month;


      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}
 
  const onChangeSearch = query => setSearchQuery(query);
  const dummyBolo = {
    id: Math.random().toString(),
    Date: "22-12-2021",
    Desc: "Red Honda City, Occupied Twice, ISD-XXXX"
    }
  useEffect(() => {
     setBolo((oldBolo) => [...oldBolo, dummyBolo]);
  }, []);
  const addBolo = () => {
    if (boloDesc != '') {
      const boloData = {
        id: Math.random().toString(),
        Date: getCurrentDate(),
        Desc: boloDesc
      };
      setBoloDesc('');
      setBolo((oldBolo) => [...oldBolo, boloData]);
      alert("BOLO Added Successfully");
    }
  };
    return(
      <View>
      
      
      <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
         BOLO
      </Text>
      <View style={{ flex:1, flexDirection: 'row', margin: 5, padding: 10 }}>
        <TextInput
          style={{width:'90%', padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={boloDesc}
          onChangeText={setBoloDesc}
        />
        <Ionicons
              name="add-circle"
              onPress={() => addBolo()}
              size={30}
              color="black"
            />
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Description</DataTable.Title>
        </DataTable.Header>
      <FlatList
          data={bolo}
          renderItem={({ item, index }) => {
            if (item != undefined) {
              return (
                <TouchableOpacity>
                  <DataTable.Row>
                     <View style={{fontSize:13, justifyContent: 'center'}}><Text>{item.Date}</Text></View>
                    <View style={{marginLeft: 90, fontSize:13, justifyContent: 'center', flex:1, flexWrap: 'wrap'}}><Text>{item.Desc}</Text></View>
                  </DataTable.Row>
                </TouchableOpacity>
              );
            }
          }}
          keyExtractor={(index) => {
            return index;
          }}
        />
        </DataTable>
      </ScrollView>
      </View>
    );
}