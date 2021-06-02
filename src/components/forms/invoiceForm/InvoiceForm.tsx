import React, { FC } from 'react';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InvoiceFormHeader, CustomSelect, CustomDatePicker, invoiceBillingInfoYupSchema } from 'components';
import { InvoiceFormMode, IInvoiceBillingInfo } from 'models';

const emptyInvoiceBillingInfo = {
  fromStreetAddress: '',
  fromCity: '',
  fromPostCode: '',
  fromCountry: '',
  toClientsName: '',
  toClientsEmail: '',
  toStreetAddress: '',
  toCity: '',
  toPostCode: '',
  toCountry: '',
  invoiceDate: new Date(),
  paymentTerms: '',
  projectDescription: '',
};

interface IInvoiceFormProps {
  mode: InvoiceFormMode;
  defaultValues?: IInvoiceBillingInfo;
}

export const InvoiceForm: FC<IInvoiceFormProps> = ({ mode, defaultValues }) => {
  const { t } = useTranslation('InvoiceForm');
  const {
    control,
    register,
    formState: { errors },
  } = useForm<IInvoiceBillingInfo>({
    mode: 'onBlur',
    defaultValues: defaultValues ?? emptyInvoiceBillingInfo,
    resolver: yupResolver(invoiceBillingInfoYupSchema),
  });

  return (
    <Box>
      <InvoiceFormHeader mode={mode} />
      <VStack spacing={6} alignItems="flex-start" mb={[10, 12]}>
        <Text as="h3" textStyle="h4" color="invoice.mediumSlateBlue">
          {t('BILL_FROM')}
        </Text>
        <FormControl id="fromStreetAddress" isInvalid={!!errors.fromStreetAddress?.message}>
          <Flex justifyContent="space-between">
            <FormLabel>{t('STREET_ADDRESS')}</FormLabel>
            <FormErrorMessage>{errors.fromStreetAddress?.message}</FormErrorMessage>
          </Flex>
          <Input {...register('fromStreetAddress')} />
        </FormControl>
        <Wrap
          spacing={6}
          sx={{
            '& > ul': {
              alignItems: 'flex-end',
            },
          }}
        >
          <WrapItem flex={1} minWidth="150px">
            <FormControl id="fromCity" isInvalid={!!errors.fromCity?.message}>
              <Flex justifyContent="space-between">
                <FormLabel>{t('CITY')}</FormLabel>
                <FormErrorMessage>{errors.fromCity?.message}</FormErrorMessage>
              </Flex>
              <Input {...register('fromCity')} />
            </FormControl>
          </WrapItem>
          <WrapItem flex={1} minWidth="150px">
            <FormControl id="fromPostCode" isInvalid={!!errors.fromPostCode?.message}>
              <Flex justifyContent="space-between">
                <FormLabel>{t('POST_CODE')}</FormLabel>
                <FormErrorMessage>{errors.fromPostCode?.message}</FormErrorMessage>
              </Flex>
              <Input {...register('fromPostCode')} />
            </FormControl>
          </WrapItem>
          <WrapItem flex={1} minWidth="150px">
            <FormControl id="fromCountry" isInvalid={!!errors.fromCountry?.message}>
              <Flex justifyContent="space-between">
                <FormLabel>{t('COUNTRY')}</FormLabel>
                <FormErrorMessage>{errors.fromCountry?.message}</FormErrorMessage>
              </Flex>
              <Input {...register('fromCountry')} />
            </FormControl>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack spacing={6} alignItems="flex-start" mb={[10, 12]}>
        <Text as="h3" textStyle="h4" color="invoice.mediumSlateBlue">
          {t('BILL_TO')}
        </Text>
        <FormControl id="toClientsName" isInvalid={!!errors.toClientsName?.message}>
          <Flex justifyContent="space-between">
            <FormLabel>{t('CLIENTS_NAME')}</FormLabel>
            <FormErrorMessage>{errors.toClientsName?.message}</FormErrorMessage>
          </Flex>
          <Input {...register('toClientsName')} />
        </FormControl>
        <FormControl id="toClientsEmail" isInvalid={!!errors.toClientsEmail?.message}>
          <Flex justifyContent="space-between">
            <FormLabel>{t('CLIENTS_EMAIL')}</FormLabel>
            <FormErrorMessage>{errors.toClientsEmail?.message}</FormErrorMessage>
          </Flex>
          <Input {...register('toClientsEmail')} placeholder={t('CLIENTS_EMAIL_PLACEHOLDER')} />
        </FormControl>
        <FormControl id="toStreetAddress" isInvalid={!!errors.toStreetAddress?.message}>
          <Flex justifyContent="space-between">
            <FormLabel>{t('STREET_ADDRESS')}</FormLabel>
            <FormErrorMessage>{errors.toStreetAddress?.message}</FormErrorMessage>
          </Flex>
          <Input {...register('toStreetAddress')} />
        </FormControl>
        <Wrap
          spacing={6}
          sx={{
            '& > ul': {
              alignItems: 'flex-end',
            },
          }}
        >
          <WrapItem flex={1} minWidth="150px">
            <FormControl id="toCity" isInvalid={!!errors.toCity?.message}>
              <Flex justifyContent="space-between">
                <FormLabel>{t('CITY')}</FormLabel>
                <FormErrorMessage>{errors.toCity?.message}</FormErrorMessage>
              </Flex>
              <Input {...register('toCity')} />
            </FormControl>
          </WrapItem>
          <WrapItem flex={1} minWidth="150px">
            <FormControl id="toPostCode" isInvalid={!!errors.toPostCode?.message}>
              <Flex justifyContent="space-between">
                <FormLabel>{t('POST_CODE')}</FormLabel>
                <FormErrorMessage>{errors.toPostCode?.message}</FormErrorMessage>
              </Flex>
              <Input {...register('toPostCode')} />
            </FormControl>
          </WrapItem>
          <WrapItem flex={1} minWidth="150px">
            <FormControl id="toCountry" isInvalid={!!errors.toCountry?.message}>
              <Flex justifyContent="space-between">
                <FormLabel>{t('COUNTRY')}</FormLabel>
                <FormErrorMessage>{errors.toCountry?.message}</FormErrorMessage>
              </Flex>
              <Input {...register('toCountry')} />
            </FormControl>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack spacing={6} alignItems="flex-start" mb={[10, 12]}>
        <Wrap
          spacing={6}
          sx={{
            '& > ul': {
              alignItems: 'flex-end',
            },
          }}
        >
          <WrapItem flex={1} minWidth="230px">
            <Controller
              name="invoiceDate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CustomDatePicker date={value} onChange={onChange} label={t('INVOICE_DATE')} />
              )}
            />
          </WrapItem>
          <WrapItem flex={1} minWidth="230px">
            <Controller
              name="paymentTerms"
              control={control}
              render={({ field: { name, ref, value, onChange, onBlur }, fieldState: { invalid, error } }) => (
                <CustomSelect
                  label={t('PAYMENT_TERMS')}
                  name={name}
                  value={value}
                  ref={ref}
                  onChange={onChange}
                  isInvalid={invalid}
                  errorText={error?.message}
                  onBlur={onBlur}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                />
              )}
            />
          </WrapItem>
        </Wrap>
        <FormControl id="projectDescription" isInvalid={!!errors.projectDescription?.message}>
          <Flex justifyContent="space-between">
            <FormLabel>{t('PROJECT_DESCRIPTION')}</FormLabel>
            <FormErrorMessage>{errors.projectDescription?.message}</FormErrorMessage>
          </Flex>
          <Input {...register('projectDescription')} placeholder={t('PROJECT_DESCRIPTION_PLACEHOLDER')} />
        </FormControl>
      </VStack>
    </Box>
  );
};
