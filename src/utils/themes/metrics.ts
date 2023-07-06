import {Dimensions} from 'react-native';
import {vs as RNVerticalScale} from 'react-native-size-matters';
export const {height, width, fontScale} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const HEIGHT_CUT_OFF = 600;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const scaledFontSize = (size: number) =>
  height > HEIGHT_CUT_OFF ? size : size * (height / (HEIGHT_CUT_OFF * 1.1));
const verticalScale = (size: number) => RNVerticalScale(size);
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default {
  scaledFontSize,
  scale,
  verticalScale,
  moderateScale,
};
