import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import TabBar from '../components/BottomTabs/TabBar';


import Home from '../screens/Homepage/Home';
import Fridge from '../screens/Homepage/Fridge';
import Notifications from '../screens/Homepage/Notifications';
import Profile from '../screens/Homepage/Profile';

const Tab = createBottomTabNavigator();
const MyTheme = {
      dark: false,
      colors: {
            background: '#52a2e7',
      },
};

export default function HomeNavigator(props) {
      return (
            <NavigationContainer theme={MyTheme}>
                  <Tab.Navigator initialRouteName={"home"} screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="Home" children={() => <Home showMenu={props.showMenu} />} options={{
                              tabBarLabel: "Home",
                              title: "Home",
                        }} />
                        <Tab.Screen name="Fridge" component={Fridge} options={{
                              tabBarLabel: "Fridge",
                              title: "Fridge"
                        }} />
                        <Tab.Screen name="PlaceholderScreen" component={Home} options={{
                              tabBarLabel: "PlaceholderScreen",
                              title: "PlaceholderScreen"
                        }} />
                        <Tab.Screen name="Notifications" component={Notifications} options={{
                              tabBarLabel: "Notifications",
                              title: "Notifications"
                        }} />
                        <Tab.Screen name="Profile" component={Profile} options={{
                              tabBarLabel: "Profile",
                              title: "Profile"
                        }} />
                  </Tab.Navigator>
            </NavigationContainer>
      );
}