import React, { FC } from 'react';
import { MenuItem, useColorModeValue } from '@chakra-ui/react';

interface IProfileMenuItemProps {
  onClick: () => void;
}

export const ProfileMenuItem: FC<IProfileMenuItemProps> = ({ children, onClick }) => {
  return (
    <MenuItem
      textStyle="h3"
      color="white"
      onClick={onClick}
      _focus={{
        bgColor: useColorModeValue('invoice.oxfordBlue', 'invoice.spaceCadet'),
        color: 'invoice.mediumPurple',
      }}
      _hover={{
        color: 'invoice.mediumPurple',
      }}
    >
      {children}
    </MenuItem>
  );
};
