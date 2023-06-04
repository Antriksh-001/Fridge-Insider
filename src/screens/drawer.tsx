import React from 'react'
import { View, FlatList,Text, TouchableOpacity,StyleSheet,Image } from 'react-native'

const menus = [
    {icon : require('../../assets/home.png') , title : 'Home'},
    {icon : require('../../assets/search.png') , title : 'Search'},
    {icon : require('../../assets/bell.png') , title : 'Notifications'},
    {icon : require('../../assets/settings.png') , title : 'Settings'},
    // {icon : require('./assets/logout.png') , title : 'LogOut'},
  ]

const Drawer = () => {
    return (
        <View style={Styles.container}>
         <View style={{marginTop:30}}>
           <FlatList 
             data={menus}
             renderItem={({item,index})=> {
              return (
                 <TouchableOpacity style={{
                    width:170,
                    height:40,
                    marginLeft:20,
                    marginTop:20,
                    backgroundColor:'#fff',
                    borderRadius:10,
                    flexDirection:'row',
                    alignItems:'center'
                 }}>
                  <Image source={item.icon} style={{width:24 , height:24 , marginLeft:20}}/>
                  <Text style={{fontSize:14 , marginLeft:20}}>{item.title}</Text>
                 </TouchableOpacity>
              )}}
            />

            <TouchableOpacity style={{
                    width:170,
                    height:40,
                    marginLeft:20,
                    marginTop:20,
                    marginBottom:40,
                    backgroundColor:'#fff',
                    borderRadius:10,
                    flexDirection:'row',
                    alignItems:'center'
                 }}>
                  <Image source={require('../../assets/logout.png')} style={{width:24 , height:24 , marginLeft:20}}/>
                  <Text style={{fontSize:14 , marginLeft:20}}>LogOut</Text>
                 </TouchableOpacity>

         </View>
       </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#57A9D9',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });

export default Drawer