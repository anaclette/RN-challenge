import {colors, metrics} from '@/utils/themes';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.background} size={metrics.scale(100)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
