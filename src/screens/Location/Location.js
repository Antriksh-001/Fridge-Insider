import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function Location() {
      return (
            <View style={styles.cont}>
                  <View style={styles.skikbtncont}>
                        <TouchableOpacity>
                              <View style={styles.skipbtn}>
                                    <View>
                                          <Text style={styles.skipTxt}>SKIP</Text>
                                    </View>
                                    <View>
                                          <Feather name="chevrons-right" size={width / 15} color={Colors.bg} />
                                    </View>
                              </View>
                        </TouchableOpacity>
                  </View>
                  <View style={styles.Logo}>
                        {/* Logo */}
                  </View>
                  <View style={styles.Heading}>
                        <View style={styles.WelcomeNote}>
                              <Text style={styles.Headingtxt}>Welcome{'\n'}Antriksh!</Text>
                        </View>
                        <View style={styles.AppDescription}>
                              <Text style={styles.AppDescriptionTxt}>Reduce food waste and schedule convenient pickup by setting up your delivery address.</Text>
                        </View>
                  </View>
                  <View style={styles.LocationTypesBtnCont}>
                        <View style={{ width: '90%' }}>
                              <View style={styles.SelectLocationCont}>
                                    <Text style={styles.SelectLocationTxt}>SELECT LOCATION</Text>
                              </View>
                        </View>
                        <View style={{ width: '100%' }}>
                              <TouchableOpacity style={styles.LocationBtnCont} onPress={() => { console.log('Locate Me Button Clicked') }}>
                                    <View style={{ paddingLeft: width / 20, paddingRight: width / 30 }}>
                                          <Image source={require('../../../assets/images/search-locate.png')} style={styles.LocationIcon} />

                                    </View>
                                    <View style={styles.locationBtn}>
                                          <Text style={styles.LocationBtnTxt}>Locate Me</Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%' }}>
                              <TouchableOpacity style={styles.LocationBtnCont} onPress={() => { console.log('Provide Pickup Location Button Clicked') }}>
                                    <View style={{ paddingLeft: width / 20, paddingRight: width / 30 }}>
                                          <Image source={require('../../../assets/images/locate.png')} style={styles.LocationIcon} />
                                    </View>
                                    <View style={styles.locationBtn}>
                                          <Text style={styles.LocationBtnTxt}>Provide Pickup Location</Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      cont: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: width / 10,
            backgroundColor: Colors.body_dark,
      },
      skikbtncont: {
            width: '100%',
            position: 'relative',
            top: 40,
            height: height * 0.04,
            alignItems: 'flex-end',
      },
      skipbtn: {
            opacity: 0.65,
            flexDirection: 'row',
            alignItems: 'center',
      },
      skipTxt: {
            fontFamily: 'SF-Pro-Rounded-Bold',
            fontSize: width / 20,
            color: Colors.bg,
            letterSpacing: 0.8,
      },
      Logo: {
            height: height * 0.35,
      },
      Heading: {
            height: height * 0.25,
      },
      WelcomeNote: {
            alignItems: 'center',
      },
      Headingtxt: {
            textAlign: 'center',
            color: 'white',
            opacity: 1,
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: width / 9.5,
      },
      AppDescription: {
            marginTop: height / 80,
            alignItems: 'center',
      },
      AppDescriptionTxt: {
            textAlign: 'center',
            color: 'white',
            opacity: 0.6,
            fontFamily: 'SF-Pro-Rounded-Medium',
            fontSize: width / 18,
      },
      LocationTypesBtnCont: {
            height: height * 0.38,
            width: '100%',
            paddingHorizontal: width / 80,
            justifyContent: 'center',
            alignItems: 'center',
      },
      SelectLocationTxt: {
            color: 'white',
            opacity: 0.6,
            fontFamily: 'SF-Pro-Rounded-Bold',
            fontSize: width/19.55,
            letterSpacing: 0.5,
      },
      LocationBtnCont: {
            marginTop: height / 40,
            flexDirection: 'row',
            alignItems: 'center',
            height: width / 5.8,
            backgroundColor: 'white',
            borderRadius: 30,
            shadowColor: '#FFFFFF',
            shadowOpacity: 0.06,
            shadowRadius: 20,
            elevation: 4,
      },
      LocationIcon: {
            width: width / 16.2,
            height: width / 16.2,
            // opacity: 0.6,
      },
      LocationBtnTxt: {
            fontSize: width / 20,
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: Colors.text_dark,
            letterSpacing: 0.5,
      },
})