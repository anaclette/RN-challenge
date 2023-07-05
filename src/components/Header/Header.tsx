import React from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <Icon name="content-save-outline" size={40} style={styles.icon} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 130,
    // TODO: SCALE SIZES
  },
  logoImage: {
    width: 60,
    height: 60,
    left: 20,
  },
  icon: {
    right: 20,
  },
});
