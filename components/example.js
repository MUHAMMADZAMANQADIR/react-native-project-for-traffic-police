import React , {useState} from 'react'
 
import { db } from '../firebase'

const Example= () => {

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
    crimehistery: ''
  });

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
    };


export default Example;
