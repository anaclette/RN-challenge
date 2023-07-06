import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '@/components';
import {HOME_ROUTES, ROOT_ROUTES} from '@/navigation/routes';
import {HomeTabScreenProps} from '@/navigation/types';
import {useGetOpeningsQuery} from '@/state/us-central';
import metrics from '@/utils/themes/metrics';
import colors from '@/utils/themes/colors';
import {Stock} from '@/types/interfaces';

export const OpeningsScreen = ({
  navigation,
}: HomeTabScreenProps<HOME_ROUTES.OPENINGS>) => {
  const {data, isSuccess, isLoading} = useGetOpeningsQuery();

  return (
    <View style={styles.mainContainer}>
      {!isLoading &&
        isSuccess &&
        data.map((item: Stock, index: number) => {
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
