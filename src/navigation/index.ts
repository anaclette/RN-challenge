import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabParamList, RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HomeTabs = createBottomTabNavigator<HomeTabParamList>();

const navigationRef = createNavigationContainerRef<RootStackParamList>();

export {RootStack, HomeTabs, navigationRef};
