import React from 'react';
import {Button} from '@/components';
import {View, StyleSheet} from 'react-native';
import {HOME_ROUTES, ROOT_ROUTES} from '@/navigation/routes';
import {HomeTabScreenProps} from '@/navigation/types';
import {useGetEquipmentQuery} from '@/state/us-central';
import metrics from '@/utils/themes/metrics';
import colors from '@/utils/themes/colors';

export const EquipmentScreen = ({
  navigation,
}: HomeTabScreenProps<HOME_ROUTES.EQUIPMENT>) => {
  const {data, isSuccess, isLoading} = useGetEquipmentQuery();

  return (
    <View style={styles.mainContainer}>
      {!isLoading &&
        isSuccess &&
        data.map((item, index) => {
          return (
            <Button
              key={'item' + index}
              icon="chevron-right"
              size={metrics.scale(25)}
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
});
