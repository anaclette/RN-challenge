import colors from '@/utils/themes/colors';
import metrics from '@/utils/themes/metrics';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  FlexStyle,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  icon?: string;
  text?: string;
  onPress: () => void;
  size?: number;
  color?: string;
  wrapperStyle?: FlexStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button = ({
  text,
  icon,
  color,
  size,
  onPress,
  wrapperStyle,
  buttonStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.5}
      onPress={onPress}
      style={buttonStyle ?? styles.button}>
      <View style={wrapperStyle ?? styles.wrapperStyle}>
        {text && <Text style={textStyle ?? styles.text}>{text}</Text>}
        {icon && (
          <Icon
            name={icon}
            size={size ?? metrics.scale(20)}
            color={color ? color : colors.regularIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: metrics.scale(30),
    alignSelf: 'center',
    justifyContent: 'center',
    minWidth: metrics.moderateScale(180),
    maxHeight: metrics.verticalScale(90),
    backgroundColor: colors.lightContrast,
    borderColor: colors.darkContrast,
  },
  text: {
    fontSize: metrics.scaledFontSize(20),
  },
  wrapperStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
