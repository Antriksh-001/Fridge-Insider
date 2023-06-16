import React from 'react';
import {FlatList, StyleSheet, Text,Image, TouchableOpacity, View} from 'react-native';
import { SCREEN_WIDTH,SCREEN_HEIGHT } from '../../constants/Screen';
import { MotiView } from 'moti';
import { Colors } from '../../constants/Colors'; 

const menus = [
  {id : '1',type:'fruit', title : 'Apple' , cnt : '3' ,expire : '1 days left', image: require('../../../assets/images/apple.png')},
  {id : '2',type:'drink',title : 'Milk', cnt : '4' ,expire : '2 days left', image: require('../../../assets/images/tomato.png')},
  {id : '3',type:'fruit',title : 'Papaya', cnt : '1' ,expire : '3 days left', image: require('../../../assets/images/apple.png')},
  {id : '4',type:'vegetable',title : 'Tomato', cnt : '2',expire : '3 days left', image: require('../../../assets/images/tomato.png')},
  {id : '5',type:'fruit',title : 'Apple', cnt : '1',expire : '4 days left', image: require('../../../assets/images/apple.png')},
  {id : '6',type:'vegetable',title : 'Potato', cnt : '5',expire : '6 days left', image: require('../../../assets/images/tomato.png')},
  {id : '7',type:'fruit',title : 'Papaya', cnt : '1',expire : '7 days left', image: require('../../../assets/images/tomato.png')},
]

const Products = () => {

  return (
    <View style={styles.container}>
      <View style={{position:'absolute' , right:0 , top:0}}>
        <Image source={require('../../../assets/images/home_corner.png')} style={{width:230 , height:180}}/>
      </View>
      <Text style={{fontSize:35 , marginLeft:20 , marginTop:10, color:'rgba(0,0,0,0.50)',fontFamily:'SF-Pro-Rounded-Bold'}}>Hello , SAJAL</Text>
      <Text style={{fontSize:24 , marginLeft:20 , color:'rgba(0,0,0,0.50)',fontFamily:'SF-Pro-Rounded-Bold'}}>Temperature : 7</Text>
      <Text style={{fontSize:27 , marginLeft:20 , color:'rgba(0,0,0,0.50)',fontFamily:'SF-Pro-Rounded-Bold'}}>About to expire</Text>
      <View style={{marginLeft:0 , marginTop:-10}}>
        <FlatList 
             horizontal 
             data={menus}
             renderItem={({item,index})=> {
              return (
                <MotiView 
                from={{opacity:0 , translateX:-40}}
                animate={{opacity:1 , translateX:0}}
                transition={{delay : index*200}}
                >
                 <TouchableOpacity style={{
                    width:SCREEN_WIDTH/3.6,
                    height:SCREEN_HEIGHT/4.8,
                    marginLeft:16,
                    marginTop:16,
                    backgroundColor:'white',
                    borderRadius:10,
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    shadowColor:'grey',
                    elevation:10
                 }}>
                  <Image source={item.image} style={{width:65 , height:65}}/>
                  <Text style={{fontSize:22 , marginTop:10}}>{item.title}</Text>
                  <Text style={{fontSize:14}}>{item.expire}</Text>
                 </TouchableOpacity>
                </MotiView> 
              )}}
        />
      </View>
      <Text style={{fontSize:25, fontFamily:'SF-Pro-Rounded-Bold' , marginLeft:20 , marginTop:15, color:'rgba(0,0,0,0.50)'}}>All Items are Fresh</Text>

      <View style={{height:SCREEN_HEIGHT/2.07 , width:SCREEN_WIDTH , marginTop:-10}}>
      <FlatList 
             horizontal 
             data={menus}
             renderItem={({item,index})=> {
              return (
                <MotiView 
                from={{opacity:0 , translateX:-40}}
                animate={{opacity:1 , translateX:0}}
                transition={{delay : index*200}}
                >
                 <TouchableOpacity style={{
                    width:SCREEN_WIDTH/3.6,
                    height:SCREEN_HEIGHT/4.8,
                    marginLeft:16,
                    marginTop:16,
                    backgroundColor:'white',
                    borderRadius:10,
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    shadowColor:'grey',
                    elevation:10
                 }}
                 >
                  <Image source={item.image} style={{width:65 , height:65}}/>
                  <Text style={{fontSize:22 , marginTop:10}}>{item.title}</Text>
                  <Text style={{fontSize:15}}>{item.cnt} Item</Text>
                 </TouchableOpacity>
                 </MotiView>
                     )
             }}
              // keyExtractor={item => item.id}
        />  
        </View>

    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#219ebc',
    backgroundColor: Colors.bg,
  },
});
