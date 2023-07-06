import React from 'react';
import {Button, Spinner} from '@/components';
import {View, StyleSheet} from 'react-native';
import {HOME_ROUTES, ROOT_ROUTES} from '@/navigation/routes';
import {HomeTabScreenProps} from '@/navigation/types';
import {useGetEquipmentQuery} from '@/state/us-central';
import {metrics, colors} from '@/utils/themes';

export const EquipmentScreen = ({
  navigation,
}: HomeTabScreenProps<HOME_ROUTES.EQUIPMENT>) => {
  const {data, isSuccess, isLoading} = useGetEquipmentQuery();

  return (
    <View style={styles.mainContainer}>
      {isLoading && <Spinner />}
      {!isLoading &&
        isSuccess &&
        data.map(item => {
          return (
            <Button
              key={item.name}
              icon="chevron-right"
              size={metrics.scale(25)}
              textStyle={styles.buttonText}
              color={colors.darkContrast}
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
