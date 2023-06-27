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
            primary: 'rgb(255, 45, 85)',
            background: '#52a2e7',
            card: '#52a2e7',
            text: '#52a2e7',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
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
                        <Tab.Screen name="Fridge" children={() => <Fridge showMenu={props.showMenu} />} options={{
                              tabBarLabel: "Fridge",
                              title: "Fridge"
                        }} />
                        <Tab.Screen name="MenuWrapper" component={Home} options={{
                              tabBarLabel: "MenuWrapper",
                              title: "MenuWrapper"
                        }} />
                        <Tab.Screen name="Notifications" children={() => <Notifications showMenu={props.showMenu} />} options={{
                              tabBarLabel: "Notifications",
                              title: "Notifications"
                        }} />
                        <Tab.Screen name="Profile" children={() => <Profile showMenu={props.showMenu} />} options={{
                              tabBarLabel: "Profile",
                              title: "Profile"
                        }} />
                  </Tab.Navigator>
            </NavigationContainer>
      );
}