import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import Svginserter from '../../components/shared/Svginserter';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

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
    const [List, onChangeList] = useState('Recent');
    const [data1, setData1] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    useEffect(() => {
        setData1(menus);
        setOldData(menus);
    }, []);

    console.log(List);;

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
        <MotiView style={[styles.container]}
            from={{ borderRadius: 0 }}
            animate={{ borderRadius: props.showMenu ? 35 : 0 }}
            transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
        >
            <MotiView style={styles.profileAvatarBox}
                from={{ borderRadius: 0 }}
                animate={{ borderTopLeftRadius: props.showMenu ? 35 : 0 }}
                transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
            >
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
            </MotiView>

            <MotiView style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.WelcomeHeaderBox}>
                        <View style={styles.WelcomeBox}>
                            <View>
                                <Text style={styles.WelcomeHeaderTxt}>Hi {name}!</Text>
                            </View>
                            <View style={styles.WelcomeSubHeaderBox}>
                                <Text style={styles.WelcomeSubHeaderTxt}>Welcome back</Text>
                            </View>
                        </View>
                        <View style={styles.Search_FilterContainer}>
                            <View style={styles.SearchBox}>
                                <View style={styles.SearchIconBox}>
                                    <Svginserter tag={'SearchIcon'} width={width / 16.2} height={width / 16.2} />
                                </View>
                                <View>
                                    <TextInput
                                        style={styles.SearchInput}
                                        onChangeText={setTemp}
                                        value={temp}
                                        placeholder="Search food item"
                                        keyboardType="email-address"
                                        cursorColor={Colors.palette_secondary}
                                        autoFocus={false} >
                                    </TextInput>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={0.5} style={styles.FilterIconBox} onPress={() => { console.log('Clicked on Filter') }}
                                >
                                    <Svginserter tag={'FilterIcon'} width={width / 16.2} height={width / 16.2} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.mainContent}>
                    <View style={styles.FactoidHeader}>
                        <View style={styles.Factoidheading}>
                            <Text style={styles.FactoidHeadingTxt}>Trending factoid</Text>
                        </View>
                        {/* factoid Component starts */}
                        {/* Use Horizontal List Here and use this Component for Items. */}
                        {/* I will do the designing */}
                        <View style={styles.FactContainer}>
                            <LinearGradient colors={['#f9a236', '#df7325']} locations={[0, 0.8]} style={styles.FactBox}>
                                <View style={{ paddingLeft: 30 }}>
                                    <View style={styles.FactheadingBox}>
                                        <Text style={styles.Factheading}>ARTICLE</Text>
                                    </View>
                                    <View style={styles.FactContentBox}>
                                        <Text style={styles.FactContentTxt}>Discover the health benefits of 60 Kiwi species.</Text>
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={styles.FactBtn}
                                        onPress={() => { console.log('Clicked on Trending Read Now') }} >
                                        <View>
                                            <Text style={styles.FactBtnTitle}>Read Now</Text>
                                        </View>
                                        <View>
                                            <Svginserter tag={'ArrowRight'} width={24} height={24} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                            <View style={styles.FactImageBox}>
                                <Image source={require('../../../assets/images/kiwi_illustration.png')} style={styles.FactImage} />
                            </View>
                        </View>
                        {/* factoid Component ends */}
                    </View>
                    <View style={styles.ListContainer}>
                        <View style={styles.ListOptions}>
                            <MotiPressable style={{ padding: 10, paddingLeft: 20 }} onPress={() => { onChangeList('Recent') }}
                                from={{ scale: 1, opacity: 1 }}
                                animate={({ pressed }) => {
                                    'worklet'
                                    return {
                                        scale: pressed ? 0.95 : 1,
                                        opacity: pressed ? 0.5 : 1,
                                    }
                                }}
                                transition={{ type: 'timing', duration: 100 }}
                            >
                                <Text style={styles.ListHeaderTxt}>Recent</Text>
                            </MotiPressable>
                            <View style={styles.Sectiondivider} />
                            <MotiPressable style={{ padding: 10 }} onPress={() => { onChangeList('NearExpiry') }}
                                from={{ scale: 1, opacity: 1 }}
                                animate={({ pressed }) => {
                                    'worklet'
                                    return {
                                        scale: pressed ? 0.95 : 1,
                                        opacity: pressed ? 0.5 : 1,
                                    }
                                }}
                                transition={{ type: 'timing', duration: 100 }}
                            >
                                <Text style={styles.ListHeaderTxt}>Near Expiry</Text>
                            </MotiPressable>
                            <View style={styles.Sectiondivider} />
                            <MotiPressable style={{ padding: 10, paddingRight: 20 }} onPress={() => { onChangeList('Expired') }}
                                from={{ scale: 1, opacity: 1 }}
                                animate={({ pressed }) => {
                                    'worklet'
                                    return {
                                        scale: pressed ? 0.95 : 1,
                                        opacity: pressed ? 0.5 : 1,
                                    }
                                }}
                                transition={{ type: 'timing', duration: 100 }}
                            >
                                <Text style={styles.ListHeaderTxt}>Expired</Text>
                            </MotiPressable>
                        </View>
                        {/* Make a Component Separately for better code Structure and less headache */}
                    </View>
                </View>
            </MotiView>
        </MotiView>

    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.white,
    },
    header: {
        height: height * 0.3,
    },
    profileAvatarBox: {
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        zIndex: 1000,
        paddingRight: width / 8.68,
        paddingTop: height / 15.86,
        paddingBottom: height / 79.3,
        backgroundColor: Colors.white,
    },
    profileAvatar: {
        width: width / 9.775,
        height: width / 9.775,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.bg,
        shadowColor: 'black',
        elevation: 4,
    },
    mainContainer: {
        height: height,
    },
    WelcomeHeaderBox: {
        paddingHorizontal: width / 14.48,
        paddingTop: height / 9.913,
    },
    WelcomeBox: {
        paddingTop: height / 52.87,
        paddingLeft: width / 78.2,
    },
    WelcomeSubHeaderBox: {
        position: 'relative',
        bottom: width / 28,
    },
    WelcomeHeaderTxt: {
        fontSize: width / 10.3,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.palette_secondary,
        letterSpacing: 0.5,
    },
    WelcomeSubHeaderTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
    },
    Search_FilterContainer: {
        height: width / 6.98,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SearchBox: {
        width: width / 1.6,
        height: width / 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        marginLeft: width / 78.2,
        marginRight: width / 15.64,
        backgroundColor: Colors.palette_white,
    },
    SearchIconBox: {
        paddingHorizontal: width / 39.1,
    },
    SearchInputBox: {
        width: '80%',
        height: width / 7.24,
        justifyContent: 'center',
        paddingLeft: width / 39.1,
    },
    SearchInput: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
        letterSpacing: 0.4,
        width: width / 2.11,
        height: width / 7,
    },
    FilterIconBox: {
        padding: width / 24.438,
        borderRadius: 12,
        backgroundColor: Colors.palette_secondary,
    },
    mainContent: {
        height: '100%',
        marginHorizontal: width / 65.17,
        paddingHorizontal: width / 14.5,
    },
    FactoidHeader: {
        marginLeft: width / 78.2,
    },
    Factoidheading: {
        paddingTop: height / 19.825,
    },
    FactoidHeadingTxt: {
        fontSize: width / 17,
        color: Colors.palette_secondary,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        letterSpacing: 0.4,
    },
    FactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxHeight: 300,
        marginTop: height / 79.3,
        borderRadius: 25,
        backgroundColor: Colors.palette_white,
        shadowColor: Colors.palette_secondary,
        elevation: 6,
    },
    FactBox: {
        flex: 0.6,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: Colors.palette_primary,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    FactheadingBox: {
        paddingBottom: width / 78.2,
    },
    Factheading: {
        color: Colors.palette_white,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        fontSize: width / 24.4375,
        letterSpacing: 1.4,
    },
    FactContentBox: {
        paddingRight: width / 39.1,
    },
    FactContentTxt: {
        color: Colors.palette_secondary,
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: width / 21.72,
    },
    FactBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingVertical: width / 49.875,
        paddingHorizontal: width / 26.1,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    FactBtnTitle: {
        color: Colors.palette_white,
        fontSize: width / 24.438,
        fontFamily: 'SF-Pro-Rounded-Semibold',
    },
    FactImageBox: {
        flex: 0.4,
        alignItems: 'center',
    },
    FactImage: {
        width: width / 2.589,
        height: width / 2.429,
    },
    ListContainer: {
        height: height * 0.4,
        paddingTop: height / 39.65,
        marginLeft: width / 78.2,
    },
    ListOptions: {
        flexDirection: 'row',
        width: '100%',
        height: width / 8.69,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    ListHeaderTxt: {
        fontSize: width / 26.06,
        color: Colors.palette_secondary,
        fontFamily: 'SF-Pro-Text-Semibold',
        opacity: 0.7,
    },
    Sectiondivider: {
        width: 1,
        height: width / 15.64,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
});

export default Home;