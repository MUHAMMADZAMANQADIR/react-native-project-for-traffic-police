import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { BottomNavigation, Text } from 'react-native-paper'
import LogoutScreen from './LogoutScreen'
import { NavigationContainer } from '@react-navigation/native'
import MainHomescreen from "./Mainhomescreen"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import CivilianScreen from "./civilian"
import  Driver from "./Driver"
import Bolo from "./Bolo"
import Report from "./Tickets"
import Vehicle from "./Vehicle"
export default function MyComponen() {
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <Tab.Navigator
            tabBarOptions={{
               
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2,
                    
                }
            }}
            onChange={handleChange}
        >
            <Tab.Screen
                name="Home"
                component={MainHomescreen}
                options={{
                  tabBarLabel:"Home",
                  activeTintColor: "#006600",
                  tabBarIcon:({tintColor})=>(  
                 <Icon name="home" color={tintColor} size={25}/>  
                  ) 
                }}
            />

            <Tab.Screen
                name="Tickets"
                component={Report}
                options={{
                    tabBarLabel:"Tickets",
                   tabBarIcon:({tintColor})=>(  
                 <Icon name="ticket" color={tintColor} size={25}/>  
                  ) 
                }}
            />
            <Tab.Screen
                name="Vehicle"
                component={Vehicle}
                options={{
                    tabBarLabel:"Vehicle",
                    tabBarIcon:({tintColor})=>(  
                 <Icon name="car" color={tintColor} size={25}/>  
                  ) 
                }}
                 
            />
            <Tab.Screen
              name="Civilian"
              component={CivilianScreen}
              options={{
                    tabBarLabel:"Civilian",
                   tabBarIcon:({tintColor})=>(  
                 <Icon name="user" color={tintColor} size={25}/>  
                  ) 
                }}
                 
            />
            <Tab.Screen
              name="Bolo"
              component={Bolo}
              options={{
                    tabBarLabel:"BOLO",
                   tabBarIcon:({tintColor})=>(  
                 <Icon name="exclamation-triangle" color={tintColor} size={25}/>
                   
                  ) 
                }}
                 
            />
            <Tab.Screen
            name="Logout"
               component={LogoutScreen}
                options={{
                    tabBarLabel:"Logout",
                    tabBarIcon:({tintColor})=>(  
                 <Icon name="sign-out" color={tintColor} size={25}/>  
                  ) 
                }}
                 
            />
        </Tab.Navigator>
       
      
    );
};





 
 

/** 

const  TicketsRoute = () => <Text>Music</Text>;
const  VehicleRoute = () => <Text>Albums</Text>;
const CivilianRoute = () => <Text>Recents</Text>;
const LogoutRoute = () =>  {LogoutScreen};  
const HomeRoute = () => <Text>Recents</Text>;


 

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'HomeScreen', title: 'Home', icon: 'home' },
    { key: 'Tickets', title: 'Tickets', icon: 'album' },
    { key: 'Vehicle', title: 'Vehicle', icon: 'car' },
    { key: 'Civilian', title: 'Civilian', icon: 'face' },
    { key: 'logout', title: 'Logout', icon: 'logout' },
  ]);


/*const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'logout':
      return  jumpTo={LogoutScreen} ;
    case 'albums':
      return <LogoutRoute jumpTo={jumpTo} />;
  }
}
const renderScene = BottomNavigation.SceneMap({
    HomeScreen:HomeRoute,
    Tickets: TicketsRoute,
    Vehicle: VehicleRoute,
    Civilian: CivilianRoute,
    Logout: {LogoutScreen},
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent33;*/