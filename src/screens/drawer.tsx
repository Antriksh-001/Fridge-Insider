import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svginserter from '../components/shared/Svginserter';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { AntDesign } from '@expo/vector-icons';
import * as Screen from '../constants/Screen';
import { Colors } from '../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const drawer_list = [
    { icon: 'user', title: 'Profile' },
    { icon: 'barschart', title: 'Contribution Graph' },
    { icon: 'infocirlceo', title: 'FAQs' },
    { icon: 'team', title: 'About Us' },
    { icon: 'setting', title: 'Settings' },
];

const renderItem = ({ item, index }) => {
    console.log('Drawer Item is rendered');
    return (
        <View style={styles.ListItemContent}>
            <TouchableOpacity
                activeOpacity={0.45}
                style={styles.ListItem}
                onPress={() => {
                    console.log(item.title + ' Btn is clicked');
                }}
            >
                <View>
                    <AntDesign name={item.icon} size={width / 16} color="white" />
                </View>
                <View style={styles.ListTitleBox}>
                    <Text style={styles.ListTitle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            {index === drawer_list.length - 1 ? null : (
                <View style={styles.underline} />
            )}
        </View>
    );
};

const Drawer = React.memo((props: { setShowMenu: (arg0: boolean) => void; }) => {
    console.log('Drawer is rendered');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.35}
                onPress={() => {
                    props.setShowMenu(false);
                }}
            >
                <View style={styles.MenuBox}>
                    <Svginserter tag={'MenuClose'} />
                </View>
            </TouchableOpacity>
            <View style={styles.List}>
                <FlatList
                    data={drawer_list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

                <TouchableOpacity style={styles.LogoutBox}>
                    <View>
                        <AntDesign name="logout" size={width / 16.3} color="white" />
                    </View>
                    <View>
                        <Text style={styles.LogoutTxt}>LogOut</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}, () => {
    // Memo comparison logic
    return true; // or false based on your comparison
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.body_light2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    MenuBox: {
        position: 'relative',
        top: height / 11.3,
        left: width / 15.6,
        width: width / 11.2,
        height: height / 22.65,
    },
    List: {
        marginTop: height / 7.93,
        marginLeft: width / 19.55,
    },
    ListItemContent: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: width / 19.55,
    },
    ListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
    },
    ListTitleBox: {
        paddingLeft: width / 19.55,
    },
    ListTitle: {
        color: 'white',
        fontSize: width / 22,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        letterSpacing: 0.7,
    },
    underline: {
        width: width / 2.9,
        height: height / 1400,
        marginLeft: width / 8.9,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    LogoutBox: {
        marginLeft: width / 19.55,
        marginBottom: height / 11.3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    LogoutTxt: {
        fontSize: width / 19.55,
        paddingLeft: 20,
        fontFamily: 'SF-Pro-Rounded-Bold',
        color: 'white',
    },
});

export default Drawer;
