import React from 'react';
import {HomeTabs} from '@/navigation';
import {HOME_ROUTES} from '@/navigation/routes';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import copies from '@/utils/copies';
import {metrics, colors} from '@/utils/themes';
import {modalOptions} from './options/modalOptions';
import {Icon as CustomIcon} from '@/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EquipmentScreen} from '../Equipment';
import {FittingsScreen} from '../Fittings';
import {LoginScreen} from '../Login';
import {OpeningsScreen} from '../Openings';

interface IconName {
  name: string;
  focused: boolean;
}

const TabBarIcon = ({name, focused}: IconName) => {
  return (
    <CustomIcon
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
          name={HOME_ROUTES.LOGIN}
          options={{
            ...modalOptions,
            tabBarIcon: ({focused}) => (
              <Icon
                name="login"
                size={metrics.scale(30)}
                color={focused ? colors.lightContrast : colors.regularIcon}
              />
            ),
            title: 'Login',
            tabBarAccessibilityLabel: 'Login',
          }}
          component={LoginScreen}
        />
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
