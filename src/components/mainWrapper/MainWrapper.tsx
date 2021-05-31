import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SideBar } from 'components';

export const MainWrapper: FC = ({ children }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      overflow="auto"
      justifyContent="center"
      alignItems="flex-start"
      pt={['70px', '80px', '72px']}
    >
      <SideBar />
      {children}
    </Flex>
  );
};
