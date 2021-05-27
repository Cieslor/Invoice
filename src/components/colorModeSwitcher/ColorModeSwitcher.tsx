import React, { FC } from 'react';
import { Flex, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsMoon } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';

interface IColorModeSwitcherProps {
  size?: number;
}

export const ColorModeSwitcher: FC<IColorModeSwitcherProps> = ({ size = 7 }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex display="inline-flex" justifyContent="center" alignItems="center">
      <Icon
        as={useColorModeValue(BsMoon, IoIosSunny)}
        onClick={toggleColorMode}
        cursor="pointer"
        w={size}
        h={size}
        sx={{
          '& path': {
            fill: 'invoice.coolGrey',
          },
          '&:hover path': {
            fill: 'invoice.mediumPurple',
          },
        }}
      />
    </Flex>
  );
};
