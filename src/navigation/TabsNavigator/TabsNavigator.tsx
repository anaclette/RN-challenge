import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TabsNavigator = ({
  navigation,
  state,
  descriptors,
}: BottomTabBarProps) => {
  return (
    <View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const label = route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // TODO: double check this any type
            navigation.navigate<any>({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}>
            <View>
              {options.tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? 'green' : 'purple',
                // TODO: add proper colors
                size: 20,
              })}
              <Icon
                name="chair-rolling"
                //window-closed-variant
                // floor-plan
                size={20}
              />
              <Text>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
