import React from 'react';
import {ViewStyle} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {Icons} from '../../enum/Icons';
import icoMoonConfig from './selection.json';

interface Props {
  name: Icons | string;
  size?: number;
  color?: string;
  style?: ViewStyle | ViewStyle[];
}

const IcoMoon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

export const Icon = ({name, size = 50, color = 'purple', style}: Props) => (
  <IcoMoon name={name} size={size} color={color} style={style} />
);
