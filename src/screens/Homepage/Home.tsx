import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { MotiView } from 'moti';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const menus = [
  { id: '1', type: 'fruit', title: 'Apple', cnt: '3', expire: '1', image: require('../../../assets/images/apple.png') },
  { id: '2', type: 'drink', title: 'Milk', cnt: '4', expire: '2', image: require('../../../assets/images/tomato.png') },
  { id: '3', type: 'fruit', title: 'Papaya', cnt: '1', expire: '3', image: require('../../../assets/images/apple.png') },
  { id: '4', type: 'vegetable', title: 'Tomato', cnt: '2', expire: '3', image: require('../../../assets/images/tomato.png') },
  { id: '5', type: 'fruit', title: 'Apple', cnt: '1', expire: '4', image: require('../../../assets/images/apple.png') },
  { id: '6', type: 'vegetable', title: 'Potato', cnt: '5', expire: '6', image: require('../../../assets/images/tomato.png') },
  { id: '7', type: 'fruit', title: 'Papaya', cnt: '1', expire: '7', image: require('../../../assets/images/tomato.png') },
]

const Home = (props) => {
  const [data1, setData1] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();

  useEffect(() => {
    setData1(menus);
    setOldData(menus);
  }, []);

  
  const onSearch = text => {
    if (text == '') {
      setData1(oldData);
    }
    else {
      let tempList = menus.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
      setData1(tempList);
    }
  }
  // console.log(props.showMenu);
  
  return (
    <MotiView style={[styles.container]}
      from={{ borderRadius: 0 }}
      animate={{ borderRadius: props.showMenu ? 35 : 0 }}
      transition={ props.showMenu? { type: 'timing', duration: 100 }:{ type: 'timing', duration: 650 } }
    >
      
      {/* 1st header and search */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <View>
          <Text style={{ fontSize: 20, fontFamily: 'SF-Pro-Rounded-Bold', marginLeft: 20, marginTop: 5, color: 'rgba(0,0,0,0.50)' }}>Reminder</Text>
        </View>

        <View style={{ width: 160, height: 30, borderRadius: 20, borderWidth: 0.4, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
          <Image source={require('../../../assets/images/search.png')} style={{ height: 18, width: 18, marginLeft: 6, opacity: 0.5 }} />
          <TextInput ref={searchRef} placeholder="Search Items" style={{ marginLeft: 5 }} value={search} onChangeText={txt => { onSearch(txt); setSearch(txt); }} />
          {search == '' ? null : (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => {
                // searchRef.current.clear();
                onSearch('');
                setSearch('');
              }}
            >
              <Image
                source={require('../../../assets/images/close.png')}
                style={{ width: 16, height: 16, opacity: 0.5 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {data1.length == 0 ?
        (<View style={{ marginLeft: 20 }}><Text>No Search Found</Text></View>) : (

          <View style={{ marginLeft: 0 }}>
            <FlatList
              horizontal
              data={data1}
              renderItem={({ item, index }) => {
                let color1: string;
                { item.expire <= '2' ? color1 = 'red' : color1 = 'orange' }

                return (
                  <MotiView
                    from={{ opacity: 0, translateX: -40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: index * 200 }}
                  >
                    <TouchableOpacity style={{
                      width: SCREEN_WIDTH / 3.6,
                      height: SCREEN_HEIGHT / 6,
                      marginLeft: 16,
                      marginTop: 36,
                      marginBottom: 16,
                      backgroundColor: 'white',
                      borderRadius: 30,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      shadowColor: '#213a7c',
                      elevation: 10
                    }}>
                      <View style={{ position: 'absolute', top: -28, backgroundColor: Colors.bg, shadowColor: '#213a7c', elevation: 8, padding: 40, borderRadius: 100 }}>
                        <Image source={item.image} style={{ width: 60, position: 'absolute', margin: 9, height: 60 }} />
                      </View>
                      <Text style={{ fontSize: 22, marginTop: 50, fontFamily: 'SF-Pro-Rounded-Bold', color: 'grey' }}>{item.title}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: color1, height: 8, width: 8, borderRadius: 5 }}></View>
                        <Text style={{ fontSize: 14, marginTop: -10, marginLeft: 4, fontFamily: 'SF-Pro-Rounded-Bold', color: '#89889D' }}>{item.expire}</Text>
                        <Text style={{ fontSize: 10, marginTop: -6, marginLeft: 3, fontFamily: 'SF-Pro-Rounded-Bold', color: '#89889D' }}>{item.expire == '1' ? 'day' : 'days'} left</Text>
                      </View>
                    </TouchableOpacity>
                  </MotiView>
                )
              }}
            />
          </View>)
      }

      {/* 2nd header and search */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <View>
          <Text style={{ fontSize: 20, fontFamily: 'SF-Pro-Rounded-Bold', marginLeft: 20, color: 'rgba(0,0,0,0.50)' }}>Favourite Items</Text>
        </View>
        <View style={{ width: 160, height: 30, borderRadius: 20, borderWidth: 0.4, flexDirection: 'row', alignItems: 'center', marginTop: 5, marginRight: 10 }}>
          <Image source={require('../../../assets/images/search.png')} style={{ height: 18, width: 18, marginLeft: 6, opacity: 0.5 }} />
          <TextInput ref={searchRef} placeholder="Search Items" style={{ marginLeft: 5 }} value={search} onChangeText={txt => { onSearch(txt); setSearch(txt); }} />
          {search == '' ? null : (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => {
                // searchRef.current.clear();
                onSearch('');
                setSearch('');
              }}
            >
              <Image
                source={require('../../../assets/images/close.png')}
                style={{ width: 16, height: 16, opacity: 0.5 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {data1.length == 0 ?
        (<View style={{ marginLeft: 20 }}><Text>No Search Found</Text></View>) : (
          <View style={{ height: SCREEN_HEIGHT / 2.07, width: SCREEN_WIDTH }}>
            <FlatList
              horizontal
              data={data1}
              renderItem={({ item, index }) => {
                return (
                  <MotiView
                    from={{ opacity: 0, translateX: -40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: index * 200 }}
                  >
                    <TouchableOpacity style={{
                      width: SCREEN_WIDTH / 3.6,
                      height: SCREEN_HEIGHT / 6,
                      marginLeft: 16,
                      marginTop: 36,
                      backgroundColor: 'white',
                      borderRadius: 30,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      shadowColor: '#213a7c',
                      elevation: 10
                    }}
                    >
                      <View style={{ position: 'absolute', top: -28, backgroundColor: Colors.bg, shadowColor: '#213a7c', elevation: 8, padding: 40, borderRadius: 100 }}>
                        <Image source={item.image} style={{ width: 60, position: 'absolute', margin: 9, height: 60 }} />
                      </View>
                      <Text style={{ fontSize: 22, marginTop: 50, fontFamily: 'SF-Pro-Rounded-Bold', color: 'grey' }}>{item.title}</Text>
                      <Text style={{ fontSize: 14, marginTop: -10, fontFamily: 'SF-Pro-Rounded-Bold', color: '#e51153' }}>{item.cnt} {item.cnt == 1 ? 'Item' : 'Items'}</Text>
                    </TouchableOpacity>
                  </MotiView>
                )
              }}
            />
          </View>
        )
      }
    </MotiView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Home;