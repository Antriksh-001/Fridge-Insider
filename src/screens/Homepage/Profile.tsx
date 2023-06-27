import { StyleSheet, Text, View } from "react-native";
import { Colors } from '../../constants/Colors'; 
import React from "react";
import { MotiView } from "moti";

const Profile = (props) => {
  return (
    <MotiView style={styles.container}
    from={{ borderRadius: 0 }}
    animate={{ borderRadius: props.showMenu ? 35 : 0 }}
    transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
    >
      <Text>Profile</Text>
    </MotiView>
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
