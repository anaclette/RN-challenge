import React from 'react';
import {HomeScreen, ModalScreen, ProductsListScreen} from '@/screens';
import {RootStack} from '..';
import {ROOT_ROUTES} from '../routes';
import {Header} from '@/components';

const renderHeader = () => <Header />;

export const MainNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROOT_ROUTES.HOME}
        component={HomeScreen}
        options={{
          header: renderHeader,
        }}
      />
      <RootStack.Screen
        name={ROOT_ROUTES.MODAL}
        component={ModalScreen}
        options={{
          animation: 'fade',
          presentation: 'transparentModal',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={ROOT_ROUTES.PRODUCT_LIST}
        component={ProductsListScreen}
        options={{
          animation: 'slide_from_bottom',
        }}
      />
    </RootStack.Navigator>
  );
};
