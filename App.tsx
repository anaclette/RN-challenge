import React, {useEffect} from 'react';
import {
  useColorScheme,
  SafeAreaView,
  View,
  // StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigator} from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fafafa',
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;
