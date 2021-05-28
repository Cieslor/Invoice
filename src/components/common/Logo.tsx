import React, { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { ReactComponent as AppLogo } from 'assets/logo.svg';

interface ILogoProps {
  size?: number;
}

export const Logo: FC<ILogoProps> = ({ size = 7 }) => <Icon as={AppLogo} h={size} w={size} />;
