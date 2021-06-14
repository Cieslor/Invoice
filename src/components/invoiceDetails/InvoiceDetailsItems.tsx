import React, { FC, Fragment } from 'react';
import { Box, Grid, GridItem, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';
import { InvoiceItem } from 'models';

interface IInvoiceDetailsItemsProps {
  items: InvoiceItem[];
}

export const InvoiceDetailsItems: FC<IInvoiceDetailsItemsProps> = ({ items }) => {
  const { t } = useTranslation('InvoiceDetails');

  return (
    <Box borderRadius="0.5rem" bg={useColorModeValue('invoice.selago', 'invoice.ebonyClay')} overflow="hidden">
      <Grid p={[6, 8]} templateColumns={['1fr 1fr', '1fr 1fr', '3fr repeat(3, 1fr)']} rowGap={[6, 6, 8]} columnGap={4}>
        <GridItem
          textStyle="body_1"
          color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}
          display={['none', 'none', 'block']}
        >
          {t('ITEM_NAME')}
        </GridItem>
        <GridItem
          textStyle="body_1"
          color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}
          justifySelf="center"
          display={['none', 'none', 'block']}
        >
          {t('QTY')}
        </GridItem>
        <GridItem
          textStyle="body_1"
          color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}
          justifySelf="end"
          display={['none', 'none', 'block']}
        >
          {t('PRICE')}
        </GridItem>
        <GridItem
          textStyle="body_1"
          color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}
          justifySelf="end"
          display={['none', 'none', 'block']}
        >
          {t('TOTAL')}
        </GridItem>
        {items.map((item, index) => (
          <Fragment key={`invoice-item-${index}`}>
            <GridItem>
              <Text textStyle="h4">{item.itemName}</Text>
              <Text
                display={['block', 'block', 'none']}
                mt={2}
                textStyle="h4"
                color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}
              >
                {item.quantity}
                {' x '}
                <NumberFormat
                  value={item.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </Text>
            </GridItem>
            <GridItem justifySelf="center" display={['none', 'none', 'block']}>
              <Text textStyle="h4" color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}>
                {item.quantity}
              </Text>
            </GridItem>
            <GridItem justifySelf="end" display={['none', 'none', 'block']}>
              <Text textStyle="h4" color={useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}>
                <NumberFormat
                  value={item.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </Text>
            </GridItem>
            <GridItem justifySelf="end" alignSelf={['center', 'center', 'start']}>
              <Text textStyle="h4">
                <NumberFormat
                  value={item.totalPrice}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </Text>
            </GridItem>
          </Fragment>
        ))}
      </Grid>
      <Flex
        p={[6, 8]}
        bg={useColorModeValue('invoice.oxfordBlue', 'invoice.richBlack')}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="11px" fontWeight={500} lineHeight="18px" letterSpacing="-0.23px" color="white">
          {t('GRAND_TOTAL')}
        </Text>
        <Text textStyle={['h2', 'h2', 'h2_bigger']} color="white">
          <NumberFormat
            value={items.reduce((x, y) => x + y.totalPrice, 0)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            fixedDecimalScale
          />
        </Text>
      </Flex>
    </Box>
  );
};
