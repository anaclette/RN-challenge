import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Spinner} from '@/components';
import {HOME_ROUTES, ROOT_ROUTES} from '@/navigation/routes';
import {HomeTabScreenProps} from '@/navigation/types';
import {useGetOpeningsQuery} from '@/state/us-central';
import {metrics, colors} from '@/utils/themes';

export const OpeningsScreen = ({
  navigation,
}: HomeTabScreenProps<HOME_ROUTES.OPENINGS>) => {
  const {data, isSuccess, isLoading} = useGetOpeningsQuery();

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
              color={colors.darkContrast}
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
