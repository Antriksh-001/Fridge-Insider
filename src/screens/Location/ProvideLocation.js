import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

export default function ProvideLocation() {
      return (
            <View style={styles.cont}>

            </View>
      );
}

const styles = StyleSheet.create({
      cont: {
            flex: 1,
            backgroundColor: Colors.body_dark,
      },
})