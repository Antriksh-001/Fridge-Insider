import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svginserter from '../shared/Svginserter';
import NavigationIcon from './NavigationIcon';

const PlaceholderBtn = () => {
      return (
            <View style={styles.container}>
                  <Svginserter tag={'Plus'} width={60} height={60} />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center', 
      },
});

export default PlaceholderBtn;