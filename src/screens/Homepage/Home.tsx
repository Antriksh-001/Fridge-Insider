import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
import { MotiView, MotiScrollView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import Svginserter from '../../components/shared/Svginserter';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';
import { set } from 'react-native-reanimated';

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
    const [profile, setProfile] = useState(false);
    const [name, setname] = useState('Antriksh');
    const [temp, setTemp] = useState('');
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

    return (
        <MotiScrollView style={[styles.container]}
            from={{ borderRadius: 0 }}
            animate={{ borderRadius: props.showMenu ? 35 : 0 }}
            transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}>

            <View style={styles.header}>
                <View style={styles.profileAvatarBox}>
                    <MotiPressable onPress={() => { console.log('Clicked on Profile') }}
                        from={{ scale: 1 }}
                        animate={({ pressed }) => {
                            'worklet'
                            return {
                                scale: pressed ? 0.9 : 1,
                            }
                        }}>
                        <View style={styles.profileAvatar}>
                            {profile ? <Image source={require('../../../assets/images/tomato.png')} style={{ width: 40, height: 40 }} /> : <Svginserter tag={'UserProfileDefault'} width={30} height={30} />}
                        </View>
                    </MotiPressable>
                </View>

                <View style={styles.WelcomeHeaderBox}>
                    <View style={styles.WelcomeBox}>
                        <Text style={styles.WelcomeHeaderTxt}>Hi {name}!</Text>
                    </View>
                    <View style={styles.SearchBox}>
                        <View style={styles.SearchHeaderBox}>
                            <Text style={styles.SearchHeaderTxt}>Search for the food item of your interest</Text>
                        </View>
                        <View style={styles.SearchInputBox}>
                            <View>
                                <Text style={styles.SearchInputHeadingTxt}>Search</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.SearchInput}
                                    onChangeText={setTemp}
                                    value={temp}
                                    placeholder=""
                                    keyboardType="email-address"
                                    cursorColor={Colors.text_dark2}
                                    autoFocus={false} >
                                </TextInput>
                            </View>
                            <View style={styles.SearchIconBox}>
                                <Svginserter tag={'SearchIcon'} width={width / 16.2} height={width / 16.2} />
                            </View>
                        </View>
                        <View style={styles.underline} />
                    </View>
                </View>
                <View style={styles.shadow}/>
            </View>

            <View style={styles.mainContent}>
                {/* DailyFoodDiscoveries, Tasty Insights, Food Insights
                <View style={styles.FoodFactsHeader}>
                    <View style={styles.FoodFactsHeading}>
                        <Text style={styles.FoodFactsHeadingTxt}>Daily Food Fact</Text>
                    </View>
                </View> */}
            </View>










            {/* 1st header and search */}
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
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
      </View> */}
            {/* {data1.length == 0 ?
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
      } */}

            {/* 2nd header and search */}
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
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
      } */}
        </MotiScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 27,
        backgroundColor: Colors.white,
    },
    header: {
        height: height * 0.3,
    },
    profileAvatarBox: {
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10,
        paddingTop: 24,
    },
    profileAvatar: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        // backgroundColor: '#ffc200',
        backgroundColor: Colors.bg,
        shadowColor: 'black',
        elevation: 4,
    },
    WelcomeHeaderBox: {
        flex: 0.7,
    },
    WelcomeBox: {
        flex: 0.5,
        justifyContent: 'flex-end',
    },
    WelcomeHeaderTxt: {
        fontSize: 35,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.text_dark,
        letterSpacing: 0.5,
    },
    SearchBox: {
        flex: 0.5,
    },
    SearchHeaderBox: {
        flex: 0.3,
        position: 'relative',
        bottom: 10,
    },
    SearchHeaderTxt: {
        fontSize: 16,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.medium_gray,
        // color: 'rgba(0,0,0,0.50)',
        letterSpacing: 0.4,
    },
    SearchInputBox: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        top: 10,
        width: '100%',
    },
    SearchInputHeadingTxt: {
        fontSize: 19,
        fontFamily: 'SF-Pro-Text-Medium',
        color: Colors.text_dark2,
        paddingRight: 8,
    },
    SearchInput: {
        width: width / 1.8,
        fontSize: 15,
        color: Colors.medium_gray,
    },
    SearchIconBox: {
        paddingLeft: width / 39.1,
    },
    underline: {
        position: 'relative',
        top: 2,
        height: 2,
        width: '96%',
        borderRadius: 10,
        backgroundColor: Colors.text_dark2,
    },
    shadow: {
        height: 0.07,
        width: '94%',
        alignSelf: 'center',
        position: 'relative',
        top: 5,
        right: 5,
        backgroundColor: Colors.white,
        shadowColor: 'rgba(0,0,0,0.80)',
        elevation: 6,
    },
    mainContent: {
        height: height * 0.7,
    },
    FoodFactsHeading: {
        paddingTop: 30,
    },
    FoodFactsHeadingTxt: {
        fontSize: 30,
        color: Colors.text_dark,
        fontFamily: 'SF-Pro-Text-Heavy',
        letterSpacing: 0.5,
    },
});

export default Home;