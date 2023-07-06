import React, {useEffect} from 'react';
import {ROOT_ROUTES} from '@/navigation/routes';
import {RootStackScreenProps} from '@/navigation/types';
import {Product} from '@/types/interfaces';
import metrics from '@/utils/themes/metrics';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {Button} from '@/components';
import colors from '@/utils/themes/colors';

const renderItem = ({item}: {item: Product}) => {
  return (
    <View key={item.name}>
      <Image source={{uri: item.img}} style={styles.image} />
      <Text>{item.name}</Text>
    </View>
  );
};

export const ProductsListScreen = ({
  navigation,
  route,
}: RootStackScreenProps<ROOT_ROUTES.PRODUCT_LIST>) => {
  const {items, title} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
      headerLeft: () => (
        <Button
          icon="close"
          size={metrics.scale(20)}
          color={colors.darkContrast}
          onPress={() => navigation.goBack()}
          buttonStyle={styles.closeButton}
        />
      ),
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},
  image: {
    width: metrics.moderateScale(80),
    height: metrics.verticalScale(80),
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
});
