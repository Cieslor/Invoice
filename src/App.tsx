import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import { SignUp } from 'components';

const App = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      overflowY="auto"
      backgroundColor={colorMode === 'dark' ? 'invoice.xiketic' : 'invoice.cultured'}
    >
      <SignUp />
    </Flex>
  );
};

export default App;
