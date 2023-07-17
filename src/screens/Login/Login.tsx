import {Button} from '@/components';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {setCredentials} from '@/state/slices/authSlice';
import {metrics} from '@/utils/themes';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const LoginScreen = () => {
  const [userInput, setUserInput] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);

  return (
    <View style={styles.container}>
      {!user ? (
        <View style={styles.contentWrapper}>
          <TextInput
            style={styles.text}
            maxLength={20}
            accessibilityLabel="User input"
            placeholder="Nombre de usuario"
            onChangeText={input => setUserInput(input)}
          />
          <Button
            disabled={!userInput}
            buttonStyle={!userInput ? styles.button : {}}
            textStyle={
              userInput ? styles.buttonText : styles.disabledButtonText
            }
            text="Login"
            onPress={() => dispatch(setCredentials({user: userInput}))}
          />
        </View>
      ) : (
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Hola {user}! </Text>
          <Button
            buttonStyle={styles.button}
            text="Salir"
            onPress={() => {
              dispatch(setCredentials({user: null}));
              setUserInput('');
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text: {
    fontSize: metrics.scaledFontSize(20),
  },
  button: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: metrics.scaledFontSize(20),
  },
  disabledButtonText: {
    color: 'gray',
    fontSize: metrics.scaledFontSize(20),
  },
});
