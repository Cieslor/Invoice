import React, { FC } from 'react';
import { Link as ChakraLink, Box, useColorModeValue, Icon, Flex, Text, Skeleton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowBackIcon } from 'assets/icon-arrow-left.svg';
import { InvoiceListItemStatusBadge, InvoiceDetailsActions } from 'components';
import { InvoiceFromFirestore } from 'models';

interface IInvoiceDetailsHeaderProps {
  id: string;
  data: InvoiceFromFirestore | undefined;
  isLoading: boolean;
}

export const InvoiceDetailsHeader: FC<IInvoiceDetailsHeaderProps> = ({ id, data, isLoading }) => {
  const { t } = useTranslation('InvoiceDetails');

  return (
    <Box mb={[4, 6]}>
      <Box mb={8}>
        <ChakraLink
          as={Link}
          to="/"
          textStyle="h4"
          color={useColorModeValue('invoice.richBlack', 'white')}
          _hover={{ textDecoration: 'none' }}
        >
          <Icon as={ArrowBackIcon} w={3} h={3} mr={4} />
          {t('GO_BACK')}
        </ChakraLink>
      </Box>
      <Skeleton
        colorScheme={useColorModeValue('whiteAlpha', 'blackAlpha')}
        isLoaded={!isLoading}
        borderRadius="0.5rem"
        minH="88px"
      >
        <Flex
          w="100%"
          px={[6, 8]}
          py={[6, 5]}
          bg={useColorModeValue('white', 'invoice.spaceCadet')}
          boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
          borderRadius="0.5rem"
        >
          <Flex w={['100%', '100%', '50%']} justifyContent={['space-between', 'flex-start']} alignItems="center">
            <Text textStyle="body_1" mr={4} color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')}>
              {t('STATUS')}
            </Text>
            {!!data?.status && <InvoiceListItemStatusBadge status={data.status} />}
          </Flex>
          <Flex w="50%" display={['none', 'none', 'flex']}>
            {!!data && <InvoiceDetailsActions id={id} data={data} />}
          </Flex>
        </Flex>
      </Skeleton>
    </Box>
  );
};
