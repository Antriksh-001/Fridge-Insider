import React from 'react'
import { View, FlatList,Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const menus = [
    {icon : 'user' , title : 'Profile'},
    {icon : 'barschart', title : 'Contribution Graph'},
    {icon : 'infocirlceo', title : 'FAQs'},
    {icon : 'team', title : 'About Us'},
    {icon : 'setting' , title : 'Settings'},
  ]

const Drawer = () => {
    return (
        <View style={Styles.container}>
         <View style={{marginTop:50}}>
           <FlatList 
             data={menus}
             renderItem={({item,index})=> {
              return (
                 <View>
                 <TouchableOpacity style={{
                    width:170,
                    height:40,
                    marginLeft:20,
                    marginTop:20,
                    borderRadius:10,
                    flexDirection:'column',
                 }}>
                  <View style={{flexDirection:'row',marginLeft:20}}>
                    <AntDesign name={item.icon} size={24} color="white"/>
                    <Text style={{fontSize:14 , 
                      marginLeft:20,
                      color:'white',
                      fontFamily:'SF-Pro-Rounded-Bold'
                      }}>{item.title}</Text>
                  </View>
                 </TouchableOpacity>
                  {index === menus.length-1 ? <View></View> : <View style={{height:0.5,width:120,backgroundColor:'white',marginTop:10,marginLeft:80}}></View>}
                  </View>
              )}}
            />

            <TouchableOpacity style={{
                    width:170,
                    height:40,
                    marginLeft:40,
                    marginTop:20,
                    marginBottom:40,
                    borderRadius:10,
                    flexDirection:'row',
                    alignItems:'center'
                 }}>
                  
                  <AntDesign name='logout' size={24} color="white" />
                  <Text style={{fontSize:14 , marginLeft:20 , fontFamily:'SF-Pro-Rounded-Bold',color:'white'}}>LogOut</Text>
                 </TouchableOpacity>

         </View>
       </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fb8500',
      backgroundColor: '#89889D',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });

export default Drawer