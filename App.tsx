import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '@/state/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {MainNavigation} from '@/navigation/MainNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Nice to have: add error handling

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.mainContainer}>
          <NavigationContainer>
            <MainNavigation />
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
