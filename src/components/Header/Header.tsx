import {ROOT_ROUTES} from '@/navigation/routes';
import {RootStackParamList} from '@/navigation/types';
import colors from '@/utils/themes/colors';
import metrics from '@/utils/themes/metrics';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <TouchableOpacity onPress={() => navigation.navigate(ROOT_ROUTES.MODAL)}>
        <Icon
          name="content-save-outline"
          size={metrics.scale(35)}
          style={styles.icon}
          color={colors.darkContrast}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: metrics.verticalScale(100),
    backgroundColor: colors.background,
  },
  logoImage: {
    width: metrics.scale(55),
    height: metrics.scale(55),
    left: metrics.moderateScale(20),
  },
  icon: {
    right: metrics.moderateScale(20),
  },
});
