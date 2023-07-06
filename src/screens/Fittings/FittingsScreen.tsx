import React from 'react';
import {Button} from '@/components';
import {View, StyleSheet} from 'react-native';
import {HOME_ROUTES, ROOT_ROUTES} from '@/navigation/routes';
import {HomeTabScreenProps} from '@/navigation/types';
import {useGetFittingsQuery} from '@/state/us-central';
import {colors, metrics} from '@/utils/themes';

export const FittingsScreen = ({
  navigation,
}: HomeTabScreenProps<HOME_ROUTES.FITTINGS>) => {
  const {data, isSuccess, isLoading} = useGetFittingsQuery();

  return (
    <View style={styles.mainContainer}>
      {!isLoading &&
        isSuccess &&
        data.map(item => {
          return (
            <Button
              key={item.name}
              icon="chevron-right"
              color={colors.darkContrast}
              size={metrics.scale(25)}
              textStyle={styles.buttonText}
              onPress={() =>
                navigation.navigate(ROOT_ROUTES.PRODUCT_LIST, {
                  items: item.items,
                  title: item.name,
                })
              }
              text={item.name}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: colors.darkContrast,
    fontSize: metrics.scaledFontSize(20),
  },
});
