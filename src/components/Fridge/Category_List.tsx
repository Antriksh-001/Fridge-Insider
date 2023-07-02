import { Modal, Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, Image} from "react-native";
import { Colors } from '../../constants/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import menus from "../shared/temp_data";
import { useEffect, useState } from "react";
import { MotiView } from "moti";

const height = SCREEN_HEIGHT;
const width = SCREEN_WIDTH;

const Category_List = ({ type1, visible, setVisible }) => {
    console.log(type1);
    const [data1, setData1] = useState(menus);
    const [oldData, setOldData] = useState(menus);
    
    let tempdata = oldData.filter((item) => item.type == type1);
    useEffect(() => {
        setData1(tempdata);
    }, [type1]);

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
                    <View style={styles.backButton}>

                        <Text>Back</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.IntroBox}>
                    <View style={styles.IntroSubHeaderBox}>
                        <Text style={styles.IntroHeaderTxt}>{type1}</Text>
                    </View>
                    <View style={styles.IntroSubHeaderBox}>
                        <Text style={styles.IntroSubHeaderTxt}>5 Items</Text>
                    </View>

                </View>

                <View style={{height:height/1.27}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data1}
                        renderItem={({ item, index }) => {
                            let color1: string;
                            { item.expire <= 2 ? color1 = 'red' : color1 = 'orange' }
                            let lastMargin;
                            { index == data1.length - 1 ? lastMargin = 20 : lastMargin = 0 }
                
                            return (
                                <MotiView
                                    from={{ opacity: 0, translateX: -40 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ delay: index * 200 }}
                                    style={{ paddingTop: 8, paddingHorizontal: SCREEN_WIDTH / 14.5, }}
                                >
                                    <TouchableOpacity style={{
                                        width: SCREEN_WIDTH / 1.16,
                                        height: SCREEN_HEIGHT / 10,
                                        marginLeft: 0,
                                        marginTop: 0,
                                        marginBottom: lastMargin,
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        // justifyContent:'space-around',
                                        alignItems: 'center',
                                        padding: 20,
                                        shadowColor: 'grey',
                                        elevation: 10,
                                    }}>
                                        <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: 50, height: 50 }}>
                                            <Image source={item.image} style={{ width: 50, margin: 9, height: 50 }} />
                                        </View>

                                        <View style={{ marginLeft: 20, width: 100 }}>
                                            <View>
                                                <Text style={{ fontSize: 20, marginTop: 0, fontFamily: 'SF-Pro-Rounded-Bold', color: 'grey' }}>{item.title}</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 14, marginTop: -10, fontFamily: 'SF-Pro-Rounded-Medium', color: 'grey' }}>{item.type}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                                <View style={{ backgroundColor: color1, height: 8, width: 8, borderRadius: 5 }}></View>
                                                <Text style={{ fontSize: 14, marginTop: -10, marginLeft: 4, fontFamily: 'SF-Pro-Rounded-Bold', color: '#89889D' }}>{item.expire}</Text>
                                                <Text style={{ fontSize: 10, marginTop: -6, marginLeft: 3, fontFamily: 'SF-Pro-Rounded-Bold', color: '#89889D' }}>{item.expire == 1 ? 'day' : 'days'} left</Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                </MotiView>
                            )
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    backButton: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    IntroBox: {
        paddingTop: height / 52.87,
        paddingLeft: width / 78.2,
    },
    IntroSubHeaderBox: {
        position: 'relative',
        bottom: width / 28,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24
    },
    IntroHeaderTxt: {
        fontSize: width / 10.3,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.palette_secondary,
        letterSpacing: 0.5,
    },
    IntroSubHeaderTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
    },
});


export default Category_List;