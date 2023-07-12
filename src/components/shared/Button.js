import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.45} style={props.BtnBox} onPress={props.handleonPress}>
            <Text style={props.BtnTxt}>{props.Title}</Text>
        </TouchableOpacity>
    )
}

export default Button;