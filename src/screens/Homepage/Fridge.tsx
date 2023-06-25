import {StyleSheet, Text, View,Image,TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors'; 
import { MotiView } from 'moti';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Screen';
import { AntDesign } from '@expo/vector-icons';

const menus = [
  {id : '1',type:'Fruit', title : 'Apple' , cnt : '3' ,expire : '1', image: require('../../../assets/images/apple.png')},
  {id : '2',type:'Drink',title : 'Milk', cnt : '4' ,expire : '2', image: require('../../../assets/images/tomato.png')},
  {id : '3',type:'Fruit',title : 'Papaya', cnt : '1' ,expire : '3', image: require('../../../assets/images/apple.png')},
  {id : '4',type:'Vegetable',title : 'Tomato', cnt : '2',expire : '3', image: require('../../../assets/images/tomato.png')},
  {id : '5',type:'Drink',title : 'Apple', cnt : '1',expire : '4', image: require('../../../assets/images/apple.png')},
  {id : '6',type:'Vegetable',title : 'Potato', cnt : '5',expire : '6', image: require('../../../assets/images/tomato.png')},
  {id : '7',type:'Fruit',title : 'Papaya', cnt : '1',expire : '7', image: require('../../../assets/images/tomato.png')},
]

const Fridge = () => {
  return (
    <View style={styles.container}>

    {/* search bar  */}
      <View style={{marginLeft:130,marginTop:6,marginBottom:10}}>
        <View style={{width:220 , height:35 , borderRadius: 20 , borderWidth:0.4 , flexDirection:'row',alignItems:'center',marginTop:5,marginRight:10}}> 
            <Image source={require('../../../assets/images/search.png')} style={{height:20 , width:20, marginLeft:12,opacity:0.5}}/>
            <TextInput ref={undefined} placeholder="Search Items..." style={{marginLeft:10}} value={undefined} onChangeText={txt=>{}}/>
            {/* {search == ''?null : ( */}
              <TouchableOpacity
              style={{marginLeft:50}}
              onPress={()=>{
                  // searchRef.current.clear();
                  // onSearch('');
                  // setSearch('');
                }}
                >
                <Image
                source={require('../../../assets/images/close.png')}
                style={{width:16,height:16,opacity:0.5}}
                />
                </TouchableOpacity>
              {/* )} */}
        </View>
      </View>

    <ScrollView style={{flex:1}}>     
      {/* categories */}
        <View>
          <Text style={{fontFamily:'SF-Pro-Rounded-Bold',
                        marginLeft:20,
                        fontSize:24,
                        marginTop:10,
                        color:'grey',
                        }}>Categories</Text>
        </View>

      {/* categoriesList */}
        <View style={{marginLeft:16}}>
          <FlatList 
              numColumns={3}
              data={menus}
              renderItem={({item,index})=> {
                let color1: string ;
                {item.expire <= '2' ? color1='red':color1='orange'}
                
                return (
                  <MotiView 
                  from={{opacity:0 , translateX:-40}}
                  animate={{opacity:1 , translateX:0}}
                  transition={{delay : index*200}}
                  style={{paddingTop:10}}
                  >
                  <TouchableOpacity style={{
                      width:SCREEN_WIDTH/3.6,
                      height:SCREEN_HEIGHT/8,
                      marginLeft:8,
                      marginTop:0,
                      // marginBottom:16,
                      // backgroundColor:'white',
                      borderRadius:10,
                      flexDirection:'column',
                      alignItems:'center',
                      justifyContent:'center',
                  }}>
                    <View style={{backgroundColor:Colors.bg, shadowColor:'#213a7c',elevation:8,padding:30,borderRadius:100}}>
                      <Image source={item.image} style={{width:40 ,position:'absolute',margin:9, height:40 }}/>
                    </View>
                    <Text style={{fontSize:16 , marginTop:2,fontFamily:'SF-Pro-Rounded-Bold',color:'grey'}}>{item.type}</Text>
    
                  </TouchableOpacity>
                  </MotiView> 
                )}}
          />
        </View>

      {/* Favourites */}
        <View>
          <Text style={{fontFamily:'SF-Pro-Rounded-Bold',
                        marginLeft:20,
                        fontSize:24,
                        marginTop:10,
                        color:'grey',
                        }}>Favourites</Text>
        </View> 
      
      {/* favourite list */}
      <View style={{marginLeft:16}}>
          <FlatList 
              //  horizontal
              data={menus}
              renderItem={({item,index})=> {
                let color1: string ;
                {item.expire <= '2' ? color1='red':color1='orange'}
                let lastMargin;
                {index == menus.length-1 ? lastMargin=60:lastMargin=0}
                
                return (
                  <MotiView 
                  from={{opacity:0 , translateX:-40}}
                  animate={{opacity:1 , translateX:0}}
                  transition={{delay : index*200}}
                  style={{paddingTop:10}}
                  >
                  <TouchableOpacity style={{
                      width:SCREEN_WIDTH/1.12,
                      height:SCREEN_HEIGHT/8,
                      marginLeft:8,
                      marginTop:0,
                      marginBottom:lastMargin,
                      backgroundColor:'white',
                      borderRadius:10,
                      flexDirection:'row',
                      // justifyContent:'space-around',
                      alignItems:'center',
                      padding:20,
                      shadowColor:'grey',
                      elevation:10
                  }}>
                    <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center', width:80,height:80}}>
                      <Image source={item.image} style={{width:50 ,margin:9, height:50 }}/>
                    </View>

                    <View style={{marginLeft:20 , width:100}}>
                      <View>
                        <Text style={{fontSize:20 , marginTop:0,fontFamily:'SF-Pro-Rounded-Bold',color:'grey'}}>{item.title}</Text>
                      </View>
                      <View>
                        <Text style={{fontSize:14 , marginTop:-10,fontFamily:'SF-Pro-Rounded-Medium',color:'grey'}}>{item.type}</Text>
                      </View>
                      <View style={{flexDirection:'row',marginTop:6}}>
                       <View style={{backgroundColor:color1,height:8,width:8,borderRadius:5}}></View>
                       <Text style={{fontSize:14,marginTop:-10 ,marginLeft:4,fontFamily:'SF-Pro-Rounded-Bold',color:'#89889D'}}>{item.expire}</Text>
                       <Text style={{fontSize:10,marginTop:-6 ,marginLeft:3,fontFamily:'SF-Pro-Rounded-Bold',color:'#89889D'}}>{item.expire == '1'?'day':'days'} left</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:50}}> 
                      <AntDesign name="heart" size={34} color="red" />
                    </View>
    
                  </TouchableOpacity>
                  </MotiView> 
                )}}
          />
        </View>
    </ScrollView>  
    </View>

  );
};

export default Fridge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // top:35
    // Bottom:60
  },
});
