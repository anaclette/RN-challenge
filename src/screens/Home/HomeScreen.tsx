import React from 'react';
import {HomeTabs} from '@/navigation';
import {HOME_ROUTES} from '@/navigation/routes';
import {OpeningsScreen} from '../Openings';
import {FittingsScreen} from '../Fittings';
import {EquipmentScreen} from '../Equipment';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import copies from '@/utils/copies';
import {metrics, colors} from '@/utils/themes';
import {modalOptions} from './options/modalOptions';
import {Icon} from '@/components';

interface IconName {
  name: string;
  focused: boolean;
}

const TabBarIcon = ({name, focused}: IconName) => {
  return (
    <Icon
      name={name}
      size={metrics.scale(30)}
      color={focused ? colors.lightContrast : colors.regularIcon}
    />
  );
};

const getTabBarIcon = (iconName: string, focused: boolean) => {
  return <TabBarIcon name={iconName} focused={focused} />;
};

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={[styles.topSafeArea, {paddingTop: insets.top}]} />
      <HomeTabs.Navigator
        sceneContainerStyle={{backgroundColor: colors.inactive}}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.background,
            minHeight: metrics.verticalScale(80),
            justifyContent: 'flex-end',
            paddingBottom: metrics.verticalScale(15),
          },
        }}>
        <HomeTabs.Screen
          name={HOME_ROUTES.OPENINGS}
          options={{
            ...modalOptions,
            tabBarIcon: ({focused}) => getTabBarIcon('Openings', focused),
            title: copies.openingsTab,
            tabBarAccessibilityLabel: copies.openingsTab,
          }}
          component={OpeningsScreen}
        />
        <HomeTabs.Screen
          name={HOME_ROUTES.FITTINGS}
          options={{
            ...modalOptions,
            tabBarIcon: ({focused}) => getTabBarIcon('Fittings', focused),
            title: copies.fittingsTab,
            tabBarAccessibilityLabel: copies.fittingsTab,
          }}
          component={FittingsScreen}
        />
        <HomeTabs.Screen
          name={HOME_ROUTES.EQUIPMENT}
          options={{
            ...modalOptions,
            tabBarIcon: ({focused}) => getTabBarIcon('Equipment', focused),
            title: copies.equipmentTab,
            tabBarAccessibilityLabel: copies.equipmentTab,
          }}
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
