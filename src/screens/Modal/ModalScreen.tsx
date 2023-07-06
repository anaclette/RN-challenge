import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Button} from '@/components';
import copies from '@/utils/copies';
import {RootStackScreenProps} from '@/navigation/types';
import {ROOT_ROUTES} from '@/navigation/routes';
import {metrics, colors} from '@/utils/themes';

export const ModalScreen = ({
  navigation,
}: RootStackScreenProps<ROOT_ROUTES.MODAL>) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.pop()}>
      <View style={styles.mainContainer}>
        <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
          <View style={styles.buttonsWrapper}>
            <Button
              textStyle={styles.buttonText}
              buttonStyle={styles.optionButton}
              text={copies.saveAndLeave}
              onPress={() => undefined}
            />
            <Button
              textStyle={styles.buttonText}
              buttonStyle={styles.optionButton}
              text={copies.leaveWithoutSaving}
              onPress={() => undefined}
            />
            <Button
              textStyle={styles.buttonText}
              buttonStyle={styles.optionButton}
              text={copies.saveAndContinue}
              onPress={() => undefined}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  buttonsWrapper: {
    padding: metrics.scale(20),
    borderRadius: metrics.scale(16),
    justifyContent: 'space-between',
    backgroundColor: colors.inactive,
  },
  optionButton: {
    backgroundColor: colors.darkContrast,
    padding: metrics.scale(20),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: metrics.scale(20),
    marginVertical: metrics.verticalScale(20),
  },
  buttonText: {
    color: colors.lightContrast,
    fontSize: metrics.scaledFontSize(18),
  },
});
