import React, { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { ReactComponent as AppLogo } from 'assets/logo.svg';

interface ILogoProps {
  size?: number[];
  color?: string;
}

export const Logo: FC<ILogoProps> = ({ size = [7], color }) => (
  <Icon
    as={AppLogo}
    h={size}
    w={size}
    color={color}
    sx={{
      '& path': {
        fill: color,
      },
    }}
  />
);
