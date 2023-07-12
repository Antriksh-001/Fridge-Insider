import React from "react";
import { Text, View, TouchableOpacity, TouchableHighlight } from "react-native";

const Button = (props) => {
    return (
        <TouchableHighlight style={props.BtnHighlight} onPress={props.handleonPress}>
            <View style={props.BtnBox}>
                <Text style={props.BtnTxt}>{props.Title}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default Button;