import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SignIn, ColorModeSwitcher, Logo } from 'components';

export const SignInView: FC = () => {
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Flex position="absolute" top="0" left="0" w="100%" justifyContent="space-between" p={5}>
        <Logo />
        <ColorModeSwitcher />
      </Flex>
      <SignIn />
    </Flex>
  );
};
