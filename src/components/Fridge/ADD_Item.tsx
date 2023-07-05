import { Modal, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback , TouchableOpacity} from "react-native";
import { Colors } from '../../constants/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";
import { useState } from "react";

const ADD_ITEM = ({ visible, setVisible }) => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [quantity,setQuantity] = useState('');
    const [expire, setExpire] = useState('');
    return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible)
                }}>
                <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
                    <View style={styles.formMenu}>
                        <View style={styles.formComp}>

                            <View style={styles.FormBox}>
                                <TextInput
                                    style={styles.FormInput}
                                    onChangeText={setType}
                                    value={type}
                                    placeholder="Select Category"
                                    keyboardType="email-address"
                                    cursorColor={Colors.palette_secondary}
                                    autoFocus={false} >
                                </TextInput>
                            </View>
                            <View style={styles.FormBox}>
                                <TextInput
                                    style={styles.FormInput}
                                    onChangeText={setName}
                                    value={name}
                                    placeholder="Select Name"
                                    keyboardType="email-address"
                                    cursorColor={Colors.palette_secondary}
                                    autoFocus={false} >
                                </TextInput>
                            </View>
                            <View style={styles.FormBox}>
                                <TextInput
                                    style={styles.FormInput}
                                    onChangeText={setQuantity}
                                    value={quantity}
                                    placeholder="Quantity"
                                    keyboardType="number-pad"
                                    cursorColor={Colors.palette_secondary}
                                    autoFocus={false} >
                                </TextInput>
                            </View>
                            <View style={styles.FormBox}>
                                <TextInput
                                    style={styles.FormInput}
                                    onChangeText={setExpire}
                                    value={expire}
                                    placeholder="Select Expire"
                                    keyboardType="number-pad"
                                    cursorColor={Colors.palette_secondary}
                                    autoFocus={false} >
                                </TextInput>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={()=> setVisible(false)}>
                                <Text style={styles.buttontxt}>ADD ITEM</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // Bottom:60
    },
    formMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    formComp: {
        width: '60%',
        height: '47%',
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        elevation: 10,
        borderColor: '#52a2e7',
    },
    FormBox: {
        width: SCREEN_WIDTH / 2,
        height: SCREEN_WIDTH / 7,
        // flexDirection: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 10
    },
    FormInput: {
        fontSize: SCREEN_WIDTH / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
        letterSpacing: 0.4,
        width: SCREEN_WIDTH / 2.11,
        height: SCREEN_WIDTH / 7,
        marginLeft: 15,
    },
    button: {
        width: SCREEN_WIDTH / 2,
        height: SCREEN_WIDTH / 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginTop: 10,
        backgroundColor: '#52a2e7',
        shadowColor: 'black',
        elevation: 10,
    },
    buttontxt: {
        color: 'white',
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: 20
    }
});


export default ADD_ITEM;