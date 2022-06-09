import React, {useState ,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { TextInput,Box, Image, StyleSheet, TouchableOpacity, ScrollView,Alert, Button, View, Text, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Ionicons} from '@expo/vector-icons';
import { MultiselectDropdown} from 'sharingan-rn-modal-dropdown';
import { db } from '../firebase'
 
const msdata = [
  {
    value: '1',
    label: 'Speeding',
  },
  {
    value: '2',
    label: 'Reckless Driving',
  },
  {
    value: '3',
    label: 'No License',
  },
  {
    value: '4',
    label: 'Violation of Parking Rules',
  },
  {
    value: '5',
    label: 'Discharge of Illegal Firearm',
  },
  {
    value: '6',
    label: 'Possession of Narcotics',
  },
]
 
export default function Report() {
    const [reportinfo, setreportinfo] = useState({
    name: '',
    cnic: '',
    reportDate:'',
    comments:'',
    charges:[''],
  });
  
  const [data, setData] = useState([]);
  const [valueMS, setValueMS] = useState([]);
   const onChangeMS = (value: string[]) => {
    setValueMS(value);
    };
  const [date, setDate] = useState('04-01-2022');
  const setCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return setDate(date + '-' + month + '-' + year);//format: dd-mm-yyyy;
}

const adddate = ()=>{
       db.collection("Ticket").add({
            
            name: reportinfo.name,
            cnic: reportinfo.cnic,
            reportDate:  reportinfo.reportDate,
            comments:reportinfo.reportDate,
            charges: reportinfo.charges,
           
        })
        .then(() =>{
            alert('Ticket has been sent with following info' + 
            reportinfo.name,
            reportinfo.cnic,
            reportinfo.reportDate,
            reportinfo.reportDate,
            reportinfo.charges,
            )
          

        })
        .catch((error)=>{
            alert(error.message);
        })

  }

return(
     
      <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
         Generate Report
      </Text>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5  }}>Suspect Name:</Text>
        <TextInput
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={reportinfo.model}
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5  }}>Suspect CNIC:</Text>
        <TextInput
          keyboardType="numeric"
          style={{ padding: 5, borderWidth: 2 ,borderRadius:20}}
          value={reportinfo.model}
        />
      </View>
      <View style={{ margin: 5, padding: 10, marginBottom: -6 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Issue Date:</Text>
        <DatePicker
          style={{width: 330, padding: 5, borderWidth: 2 ,borderRadius:20}}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="06-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setreportinfo.reportDate(date);
          }}
        />
      </View>
      <View style={{textAlign: 'center', alignItems:'center'}}>
      <TouchableOpacity style={{borderWidth:1, width:'30%', backgroundColor: 'green'}} onPress={setCurrentDate}>
      <Text style={{textAlign: 'center', color:'white'}}>Current Date</Text>
      </TouchableOpacity>
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15, marginBottom:5 }}>Comments:</Text>
        <TextInput
          style={{ padding: 5, borderWidth: 2,borderRadius:20 }}
          value={reportinfo.comments}
          
        />
      </View>
      <View style={{ margin: 5, padding: 10 }}>
        <Text style={{ fontSize: 15 ,marginBottom:5  }}>Charges:</Text>
        <MultiselectDropdown
            label="Multi select"
            data={msdata}
            chipType="outlined"
            value={valueMS}
            onChange={onChangeMS}
          />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        }}>
        <Button title="CREATE" onPress={ adddate} ></Button>
      </View>
    </ScrollView>
    );
}
 