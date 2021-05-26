import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SignUp } from 'components';

export const SignUpView: FC = () => {
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <SignUp />
    </Flex>
  );
};
