import React, {useEffect} from 'react';
import {
  useColorScheme,
  SafeAreaView,
  View,
  Text,
  // StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : '#fafafa',
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Facilitapp</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
