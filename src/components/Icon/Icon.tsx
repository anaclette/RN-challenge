import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {Icons} from '@/types/enums';
import icoMoonConfig from './selection.json';
import {colors, metrics} from '@/utils/themes';

interface Props {
  name: Icons | string;
  size?: number;
  color?: string;
}

const IcoMoon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

export const Icon = ({
  name,
  size = metrics.scale(50),
  color = colors.darkContrast,
}: Props) => <IcoMoon name={name} size={size} color={color} />;
