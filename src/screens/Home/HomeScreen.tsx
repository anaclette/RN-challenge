import React from 'react';
import {HomeTabs} from '@/navigation';
import {HOME_ROUTES} from '@/navigation/routes';
import {OpeningsScreen} from '../Openings';
import {FittingsScreen} from '../Fittings';
import {EquipmentScreen} from '../Equipment';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@/components';
import colors from '@/utils/themes/colors';
import metrics from '@/utils/themes/metrics';
import copies from '@/utils/copies';
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
            tabBarInactiveTintColor: colors.inactive,
            tabBarActiveTintColor: colors.lightContrast,
            tabBarLabelStyle: {fontSize: metrics.scaledFontSize(15)},
            headerShown: false,
            title: copies.openingsTab,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="Openings" />
            ),
            tabBarAccessibilityLabel: copies.openingsTab,
          }}
          component={OpeningsScreen}
        />
        <HomeTabs.Screen
          name={HOME_ROUTES.FITTINGS}
          options={{
            tabBarInactiveTintColor: colors.inactive,
            tabBarActiveTintColor: colors.lightContrast,
            tabBarLabelStyle: {fontSize: metrics.scaledFontSize(15)},
            headerShown: false,
            title: copies.fittingsTab,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="Fittings" />
            ),
            tabBarAccessibilityLabel: copies.fittingsTab,
          }}
          component={FittingsScreen}
        />
        <HomeTabs.Screen
          name={HOME_ROUTES.EQUIPMENT}
          options={{
            tabBarInactiveTintColor: colors.inactive,
            tabBarActiveTintColor: colors.lightContrast,
            tabBarLabelStyle: {fontSize: metrics.scaledFontSize(15)},
            headerShown: false,
            title: copies.equipmentTab,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="Equipment" />
            ),
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
