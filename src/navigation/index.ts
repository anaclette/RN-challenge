import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabParamList, RootStackParamList} from './types';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HomeTabs = createMaterialBottomTabNavigator<HomeTabParamList>();

export {RootStack, HomeTabs};
