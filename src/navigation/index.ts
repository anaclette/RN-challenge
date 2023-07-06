import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabParamList, RootStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HomeTabs = createBottomTabNavigator<HomeTabParamList>();

export {RootStack, HomeTabs};
