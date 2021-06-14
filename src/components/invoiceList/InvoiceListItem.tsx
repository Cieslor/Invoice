import React, { FC } from 'react';
import { Box, Text, useColorModeValue, Grid, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import dayjs from 'dayjs';
import { ReactComponent as GoToIcon } from 'assets/icon-arrow-right.svg';
import { InvoiceFromFirestore } from 'models';
import { InvoiceListItemStatusBadge } from 'components';

interface IInvoiceListItemProps {
  id: string;
  data: InvoiceFromFirestore;
}

export const InvoiceListItem: FC<IInvoiceListItemProps> = ({ id, data }) => {
  const { t } = useTranslation('InvoiceList');

  return (
    <ChakraLink as={Link} to={`/details/${id}`} w="100%" _hover={{ textDecoration: 'none' }}>
      <Grid
        templateColumns={{ base: '1fr 1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr) auto' }}
        gap={[6, 2, 8]}
        py={[6, 0]}
        px={6}
        w="100%"
        bg={useColorModeValue('white', 'invoice.spaceCadet')}
        borderRadius="0.5rem"
        autoRows={['auto', '70px']}
        alignItems="center"
        boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
        border="1px solid transparent"
        _hover={{ borderColor: 'invoice.mediumSlateBlue' }}
        transition="border-color .15s ease-in"
        cursor="pointer"
      >
        <Box maxW={['80px', '60px', null, '80px']}>
          <Text textStyle="h4" textTransform="uppercase" isTruncated>
            <Box as="span" color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')}>
              #
            </Box>
            {id}
          </Text>
        </Box>
        <Box display={['none', 'none', 'block']}>
          <Text textStyle="body_1" color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')}>
            <Box as="span" mr={1}>
              {t('DUE')}
            </Box>
            {dayjs(data.invoiceDate.toDate()).format('D MMM YYYY')}
          </Text>
        </Box>
        <Box justifySelf={['end', 'end', 'normal']}>
          <Text textStyle="body_1" color={useColorModeValue('invoice.coolGrey', 'white')}>
            {data.toClientsName}
          </Text>
        </Box>
        <Box>
          <Text
            textStyle="body_1"
            color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')}
            display={['block', 'block', 'none']}
            mb={3}
          >
            <Box as="span" mr={2}>
              {t('DUE')}
            </Box>
            {dayjs(data.invoiceDate.toDate()).format('D MMM YYYY')}
          </Text>
          <Text
            fontSize="1rem"
            lineHeight="1.5rem"
            fontWeight={700}
            letterSpacing="-0.8px"
            color={useColorModeValue('invoice.richBlack', 'white')}
          >
            <NumberFormat
              value={data.invoiceItems.reduce((x, y) => x + y.totalPrice, 0)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale
            />
          </Text>
        </Box>
        <Box justifySelf={['end', 'end', 'normal']} display="flex" alignItems="center">
          <InvoiceListItemStatusBadge status={data.status} />
          <Icon as={GoToIcon} w={3} h={3} ml={4} display={['none', 'none', 'block']} />
        </Box>
      </Grid>
    </ChakraLink>
  );
};
