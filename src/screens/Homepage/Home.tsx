import {FlatList, StyleSheet, Text,Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const menus = [
  {title : 'apple'},
  {title : 'banana'},
  {title : 'papaya'},
  {title : 'tomato'},
  // {icon : require('./assets/logout.png') , title : 'LogOut'},
]

const Products = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30 , marginLeft:20 , marginTop:10}}>Hello , SAJAL</Text>
      <Text style={{fontSize:20 , marginLeft:20 , marginTop:10}}>Temperature : 7</Text>
      <Text style={{fontSize:20 , marginLeft:20 , marginTop:34}}>About to expire</Text>
      <View style={{marginLeft:10 , marginTop:4}}>
        <FlatList 
             horizontal 
             data={menus}
             renderItem={({item,index})=> {
              return (
                 <TouchableOpacity style={{
                    width:100,
                    height:36,
                    marginLeft:10,
                    marginTop:10,
                    backgroundColor:'#fff',
                    borderRadius:10,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                 }}>
                  {/* <Image source={item.icon} style={{width:24 , height:24 , marginLeft:20}}/> */}
                  <Text style={{fontSize:14}}>{item.title}</Text>
                 </TouchableOpacity>
              )}}
        />
      </View>
      <Text style={{fontSize:25 , marginLeft:20 , marginTop:26}}>All Items are Fresh</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'#8ecae6'
  },
});
