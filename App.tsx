import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '@/navigation';
import {ROOT_ROUTES} from '@/navigation/routes';
import {HomeScreen, ModalScreen, ProductsListScreen} from '@/screens';
import {StyleSheet, View} from 'react-native';
import {Header} from '@/components';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  /* TODO: ADD THE STORE PROVIDER */

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            header: () => <Header />,
          }}>
          <RootStack.Screen name={ROOT_ROUTES.HOME} component={HomeScreen} />
          <RootStack.Screen name={ROOT_ROUTES.MODAL} component={ModalScreen} />
          <RootStack.Screen
            name={ROOT_ROUTES.PRODUCT_LIST}
            component={ProductsListScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});

export default App;
