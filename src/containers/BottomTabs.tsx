import CustomBottomTab from '../components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Homepage/Home';
import Fridge from '../screens/Homepage/Fridge';
import Notifications from '../screens/Homepage/Notifications';
import Profile from '../screens/Homepage/Profile';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
          // headerStyle:{
          //   height:50,
          //   borderBottomLeftRadius:5,
          //   borderBottomRightRadius:5,
            // backgroundColor:'#219ebc',
          //   shadowColor:'black',
          //   elevation:25
          // }
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Fridge'}}
          name="Fridge"
          component={Fridge}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Notifications'}}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="Profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
