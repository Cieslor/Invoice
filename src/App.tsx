import React from 'react';
import {
  useColorMode,
  Button,
  Flex,
  Text,
  HStack,
  Icon,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { CustomSelect, CustomDatePicker } from 'components';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  const { handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler<{ candy: string; date: string }> = (data) => console.log(data);
  return (
    <Flex w="100%" h="100vh" justifyContent="center" alignItems="center" flexDirection="column" overflowY="auto">
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
        <Box w="220px">
          <Button variant="action-light" size="long">
            + Add new item
          </Button>
        </Box>
      </HStack>
      <VStack spacing={4} mt={5}>
        <FormControl id="user-name-invalid" w="220px" isInvalid>
          <Flex justifyContent="space-between">
            <FormLabel>Name</FormLabel>
            <FormErrorMessage>Invalid</FormErrorMessage>
          </Flex>
          <Input size="md" placeholder="test" />
        </FormControl>
        <FormControl id="user-name" w="220px">
          <Flex justifyContent="space-between">
            <FormLabel>Project Description</FormLabel>
            <FormErrorMessage>Invalid</FormErrorMessage>
          </Flex>
          <Input size="md" placeholder="e.g. Graphic Design System" />
        </FormControl>
      </VStack>
      <Box w="220px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} mt={5}>
            <Controller
              name="date"
              control={control}
              defaultValue={new Date()}
              render={({ field: { value, onChange } }) => <CustomDatePicker date={value} onChange={onChange} />}
            />
            <Controller
              name="candy"
              control={control}
              defaultValue=""
              render={({ field: { name, ref, value, onChange } }) => (
                <CustomSelect
                  label="Payment Terms"
                  name={name}
                  value={value}
                  ref={ref}
                  onChange={onChange}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                />
              )}
            />
            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default App;
