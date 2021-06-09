import React, { FC } from 'react';
import { Text, Box, Button, Grid, GridItem, FormLabel, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { invoiceItems, invoiceItemsAfterValidation } from 'state';
import { ListItem } from 'components';

export const ItemList: FC = () => {
  const { t } = useTranslation('InvoiceForm');
  const setInvoiceItems = useSetRecoilState(invoiceItems);
  const itemsWithValidation = useRecoilValue(invoiceItemsAfterValidation);

  const addNewItem = () => {
    setInvoiceItems((oldItems) => [
      ...oldItems,
      {
        itemName: '',
        quantity: 0,
        price: 0,
      },
    ]);
  };

  const modifyItem = (index: number, key: 'itemName' | 'quantity' | 'price', value: string | number) => {
    setInvoiceItems((oldItems) => {
      const item = oldItems[index];
      return [...oldItems.slice(0, index), { ...item, [key]: value }, ...oldItems.slice(index + 1)];
    });
  };

  const deleteItem = (index: number) => {
    setInvoiceItems((oldItems) => [...oldItems.filter((_, i) => i !== index)]);
  };

  return (
    <Box>
      <Text as="h3" textStyle="h2" color="invoice.coolGrey" mb={4}>
        {t('ITEM_LIST')}
      </Text>
      <Flex
        flexDirection="column"
        sx={{
          '& > div:last-child': {
            marginBottom: 0,
          },
        }}
      >
        <Grid templateColumns="repeat(12, 1fr)" gap={4} display={['none', 'none', 'grid']}>
          <GridItem colSpan={4}>
            <FormLabel>{t('ITEM_NAME')}</FormLabel>
          </GridItem>
          <GridItem colSpan={2}>
            <FormLabel>{t('QTY')}</FormLabel>
          </GridItem>
          <GridItem colSpan={3}>
            <FormLabel>{t('PRICE')}</FormLabel>
          </GridItem>
          <GridItem colSpan={2}>
            <FormLabel>{t('TOTAL')}</FormLabel>
          </GridItem>
          <GridItem />
        </Grid>
        {itemsWithValidation.map((item, index) => (
          <ListItem key={`item-${index}`} item={item} id={index} modifyItem={modifyItem} deleteItem={deleteItem} />
        ))}
      </Flex>
      <Button variant="secondary" w="100%" onClick={addNewItem} mt={4}>
        {t('ADD_NEW_ITEM')}
      </Button>
    </Box>
  );
};
