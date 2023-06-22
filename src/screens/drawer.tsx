import React from 'react'
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svginserter from '../components/shared/Svginserter';
import { AntDesign } from '@expo/vector-icons';

const menus = [
  { icon: 'user', title: 'Profile' },
  { icon: 'barschart', title: 'Contribution Graph' },
  { icon: 'infocirlceo', title: 'FAQs' },
  { icon: 'team', title: 'About Us' },
  { icon: 'setting', title: 'Settings' },
]

const Drawer = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.35} onPress={() => { props.setShowMenu(false) }} >
        <View style={styles.MenuBox} >
          <Svginserter tag={'MenuClose'} />
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 100 }}>
        <FlatList
          data={menus}
          renderItem={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity style={styles.SideBarContent}>
                  <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <AntDesign name={item.icon} size={24} color="white" />
                    <Text style={{ fontSize: 17, marginLeft: 20, color: 'white', fontFamily: 'SF-Pro-Rounded-Semibold' }}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
                {index === menus.length - 1 ? <View></View> : <View style={{ height: 0.5, width: 120, backgroundColor: 'white', marginTop: 10, marginLeft: 80 }}></View>}
              </View>
            )
          }}
        />

        <TouchableOpacity style={{
          width: 170,
          height: 40,
          marginLeft: 40,
          marginTop: 20,
          marginBottom: 70,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center'
        }}>

          <AntDesign name='logout' size={24} color="white" />
          <Text style={styles.LogoutTxt}>LogOut</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52a2e7',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  MenuBox: {
    position: 'relative',
    top: 70,
    left: 25,
    width: 35,
    height: 35,
  },
  SideBarContent: {
    width: 170,
    height: 40,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'column',
  },
  LogoutTxt: {
    fontSize: 20, marginLeft: 20,
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: 'white'
  },
});

export default Drawer