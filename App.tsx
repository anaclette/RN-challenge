import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '@/navigation';
import {ROOT_ROUTES} from '@/navigation/routes';
import {HomeScreen, ModalScreen, ProductsListScreen} from '@/screens';
import {StyleSheet, View} from 'react-native';
import {Header} from '@/components';
import {Provider} from 'react-redux';
import {persistor, store} from '@/state/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Nice to haves: error and loading handling

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.mainContainer}>
          <NavigationContainer>
            <RootStack.Navigator>
              <RootStack.Screen
                name={ROOT_ROUTES.HOME}
                component={HomeScreen}
                options={{
                  header: () => <Header />,
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
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});

export default App;
