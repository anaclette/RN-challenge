import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HOME_ROUTES, ROOT_ROUTES} from './routes';
import {Product} from '@/types/interfaces';

export type HomeTabParamList = {
  [HOME_ROUTES.EQUIPMENT]: undefined;
  [HOME_ROUTES.FITTINGS]: undefined;
  [HOME_ROUTES.OPENINGS]: undefined;
};

export type RootStackParamList = {
  [ROOT_ROUTES.HOME]: NavigatorScreenParams<HomeTabParamList>;
  [ROOT_ROUTES.MODAL]: undefined;
  [ROOT_ROUTES.PRODUCT_LIST]: {items: Product[]; title: string};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
