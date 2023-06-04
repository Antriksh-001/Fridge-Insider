import CustomBottomTab from '../components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '../screens/Home';
import Manage from '../screens/Manage';
import Favourites from '../screens/Favourites';
import Profile from '../screens/Profile';
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
          //   backgroundColor:'#219ebc',
          //   shadowColor:'black',
          //   elevation:25
          // }
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={Products}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Manage'}}
          name="Manage"
          component={Manage}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Favourites'}}
          name="Favourites"
          component={Favourites}
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
