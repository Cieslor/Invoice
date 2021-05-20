import React from 'react';
import { useColorMode, Button, Flex, Text, HStack, Icon, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiFillPlusCircle } from 'react-icons/ai';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Flex w="100%" h="100vh" justifyContent="center" alignItems="center" flexDirection="column">
      <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      <Text mt={5}>{t('INVOICES')}</Text>
      <Text as="h1" textStyle="h1" color="invoice.redSalsa">
        Hello
      </Text>
      <HStack spacing={4} mt={5}>
        <Button leftIcon={<Icon as={AiFillPlusCircle} color="inherit" w={8} h={8} />} variant="primary-with-icon">
          New invoice
        </Button>
        <Button variant="secondary">Edit</Button>
        <Button variant="action">Save as draft</Button>
        <Button variant="action-red">Delete</Button>
        <Box w="200px">
          <Button variant="action-light" size="long">
            + Add new item
          </Button>
        </Box>
      </HStack>
    </Flex>
  );
};

export default App;
