import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import Svginserter from '../shared/Svginserter';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

const PlaceholderBtn = ({wrap,setWrap}) => {
      const [wheelOpen, setWheelOpen] = useState(false);
      return (
            <MotiView style={styles.container}
                  from={{ rotateZ: '135deg' }}
                  animate={ wheelOpen? { rotateZ: '0deg' } : { rotateZ: '135deg' }}
                  transition={{
                        type: 'timing',
                        duration: 400,
                  }}>
                  {wheelOpen ? (
                        <View style={styles.Btns}>
                              <MotiPressable onPress={()=>{console.log('Add Button Pressed')}}
                                    from={{ opacity: 0 }}
                                    animate={({ pressed }) => {
                                                'worklet'
                                                wheelOpen ? { opacity: 1 } : { opacity: 0 }
                                                return {
                                                      opacity: pressed ? 0.5 : 1,
                                                      scale: pressed ? 0.8 : 1,
                                                }
                                    }}
                                    transition={{
                                          opacity: {
                                                type: 'timing',
                                                duration: 400,
                                                delay: 120,
                                          }
                                    }}
                              >
                                    <View style={[styles.btn]}>
                                          <Svginserter tag={'PlusCircle'} width={width / 12.69} height={width / 12.69} />
                                    </View>
                              </MotiPressable>
                              <MotiPressable onPress={()=>{console.log('Remove Button Pressed')}}
                                    from={{ opacity: 0 }}
                                    animate={({ pressed }) => {
                                          'worklet'
                                          wheelOpen ? { opacity: 1 } : { opacity: 0 }
                                          return {
                                                opacity: pressed ? 0.6 : 1,
                                                scale: pressed ? 0.8 : 1,
                                          }
                                    }}
                                    transition={{
                                          opacity: {
                                                type: 'timing',
                                                duration: 400,
                                                delay: 170,
                                          }
                                    }}
                              >
                                    <View style={[styles.btn]}>
                                          <Svginserter tag={'MinusCircle'} width={width / 12.69} height={width / 12.69} />
                                    </View>
                              </MotiPressable>
                        </View>
                  ) : null}
                  <TouchableOpacity 
                        activeOpacity={0.45} 
                        onPress={() => { setWheelOpen(!wheelOpen) }} style={{ transform: [{ rotateZ: '-45deg' }] }} 
                        onLongPress={()=>{ setWrap(true)}}
                        delayLongPress={300}
                        >
                        <View style={styles.BtnWheel}>
                              <Svginserter tag={'Plus'} width={width / 6.51} height={width / 6.51} />
                        </View>
                  </TouchableOpacity>
            </MotiView>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      Btns: {
            position: 'absolute',
            bottom: width / 4.89,
            width: (width * 3) / 7,
            height: width / 6.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
      },
      btn: {
            padding: width / 42.5,
            borderRadius: 30,
            backgroundColor: '#3E94DF',
            shadowColor: 'rgba(0,0,0,0.9)',
            elevation: 4,
      },
});

export default PlaceholderBtn;