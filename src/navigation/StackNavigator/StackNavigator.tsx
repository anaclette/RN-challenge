import React from 'react';
import {HomeTabs, RootStack} from '..';
import {HOME_ROUTES, ROOT_ROUTES} from '../routes';
import {
  EquipmentScreen,
  FittingsScreen,
  ModalScreen,
  OpeningsScreen,
  ProductsListScreen,
} from '../../screens';
import {TabsNavigator} from '../TabsNavigator';
// TODO: change import to @

export const StackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name={ROOT_ROUTES.MODAL}
        component={ModalScreen}
      />

      <RootStack.Screen
        options={{headerShown: false}}
        name={ROOT_ROUTES.PRODUCT_LIST}
        component={ProductsListScreen}
      />
      <HomeTabs.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <TabsNavigator {...props} />}>
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
    </RootStack.Navigator>
  );
};
