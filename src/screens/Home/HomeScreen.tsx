import React from 'react';
import {HomeTabs} from '@/navigation';
import {HOME_ROUTES} from '@/navigation/routes';
import {OpeningsScreen} from '../Openings';
import {FittingsScreen} from '../Fittings';
import {EquipmentScreen} from '../Equipment';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={[styles.topSafeArea, {paddingTop: insets.top}]} />
      <HomeTabs.Navigator>
        <HomeTabs.Screen
          name={HOME_ROUTES.OPENINGS}
          component={OpeningsScreen}
        />
        <HomeTabs.Screen
          name={HOME_ROUTES.FITTINGS}
          component={FittingsScreen}
        />
        <HomeTabs.Screen
          name={HOME_ROUTES.EQUIPMENT}
          component={EquipmentScreen}
        />
      </HomeTabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
  },
});
