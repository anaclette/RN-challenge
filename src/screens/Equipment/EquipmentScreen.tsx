import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const EquipmentScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});
