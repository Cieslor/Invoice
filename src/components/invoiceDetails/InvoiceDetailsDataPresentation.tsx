import React, { FC } from 'react';
import { Flex, Skeleton, useColorModeValue, Text, Box, Wrap, WrapItem } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { InvoiceFromFirestore } from 'models';
import { InvoiceDetailsItems } from 'components';

interface IInvoiceDetailsDataPresentationProps {
  isLoading: boolean;
  data: InvoiceFromFirestore | undefined;
  id: string;
}

export const InvoiceDetailsDataPresentation: FC<IInvoiceDetailsDataPresentationProps> = ({ isLoading, data, id }) => {
  const { t } = useTranslation('InvoiceDetails');
  const textSecondaryColor = useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb');

  return (
    <Skeleton colorScheme={useColorModeValue('whiteAlpha', 'blackAlpha')} isLoaded={!isLoading} borderRadius="0.5rem">
      <Flex
        w="100%"
        flexDirection="column"
        p={[6, 8]}
        mb={[8, 8, 0]}
        bg={useColorModeValue('white', 'invoice.spaceCadet')}
        boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
        borderRadius="0.5rem"
      >
        <Flex w="100%" justifyContent="space-between" direction={['column', 'row']} mb={8}>
          <Box mb={[8, 0]}>
            <Text textStyle="h3" textTransform="uppercase" mb={2}>
              <Box as="span" color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')}>
                #
              </Box>
              {id}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor}>
              {data?.projectDescription}
            </Text>
          </Box>
          <Box textAlign={['left', 'right']}>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.fromStreetAddress}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.fromCity}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.fromPostCode}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor}>
              {data?.fromCountry}
            </Text>
          </Box>
        </Flex>
        <Wrap w="100%" spacing={9} mb={[10, 12]}>
          <WrapItem flex={1} flexDirection="column" justifyContent="space-between">
            <Box mb={3}>
              <Text textStyle="body_1" color={textSecondaryColor} mb={3}>
                {t('INVOICE_DATE')}
              </Text>
              <Text fontSize="15px" fontWeight={700} lineHeight="1.25rem" letterSpacing="-0.31px" whiteSpace="nowrap">
                {dayjs(data?.invoiceDate.toDate()).format('D MMM YYYY')}
              </Text>
            </Box>
            <Box>
              <Text textStyle="body_1" color={textSecondaryColor} mb={3}>
                {t('PAYMENT_DUE')}
              </Text>
              <Text fontSize="15px" fontWeight={700} lineHeight="1.25rem" letterSpacing="-0.31px">
                {dayjs(data?.invoiceDate.toDate()).add(14, 'day').format('D MMM YYYY')}
              </Text>
            </Box>
          </WrapItem>
          <WrapItem flex={1} flexDirection="column">
            <Text textStyle="body_1" color={textSecondaryColor} mb={3}>
              {t('BILL_TO')}
            </Text>
            <Text
              fontSize="15px"
              fontWeight={700}
              lineHeight="1.25rem"
              letterSpacing="-0.31px"
              mb={2}
              whiteSpace="nowrap"
            >
              {data?.toClientsName}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.toStreetAddress}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.toCity}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.toPostCode}
            </Text>
            <Text textStyle="body_1" color={textSecondaryColor} mb={1}>
              {data?.toCountry}
            </Text>
          </WrapItem>
          <WrapItem flex={1} flexDirection="column">
            <Text textStyle="body_1" color={textSecondaryColor} mb={3}>
              {t('SENT_TO')}
            </Text>
            <Text fontSize="15px" fontWeight={700} lineHeight="1.25rem" letterSpacing="-0.31px" whiteSpace="nowrap">
              {data?.toClientsEmail}
            </Text>
          </WrapItem>
        </Wrap>
        {!!data?.invoiceItems && <InvoiceDetailsItems items={data.invoiceItems} />}
      </Flex>
    </Skeleton>
  );
};
