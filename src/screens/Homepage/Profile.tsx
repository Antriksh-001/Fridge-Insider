import { StyleSheet, Text, View } from "react-native";
import { Colors } from '../../constants/Colors'; 
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.bg
  },
});
