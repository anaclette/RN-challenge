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
    <View key={item.name} style={styles.imageWrapper}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{uri: item.img}} style={styles.image} />
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
      headerTitleStyle: {
        color: colors.darkContrast,
        fontSize: metrics.scaledFontSize(20),
      },
      headerStyle: {
        backgroundColor: colors.inactive,
      },
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: metrics.scaledFontSize(20),
    marginVertical: metrics.verticalScale(10),
  },
  imageWrapper: {
    width: metrics.scale(300),
    height: metrics.scale(300),
  },
  image: {
    flex: 1,
    borderRadius: metrics.scale(10),
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
});
