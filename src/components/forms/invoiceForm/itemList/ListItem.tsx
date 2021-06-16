import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Box,
  useColorModeValue,
  Icon,
  GridItem,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { MdDelete } from 'react-icons/md';
import { InvoiceItemWithValidation } from 'models';
import { showItemValidationErrors } from 'state';

interface IListItemProps {
  item: InvoiceItemWithValidation;
  id: number;
  modifyItem: (index: number, key: 'itemName' | 'quantity' | 'price', value: string | number) => void;
  deleteItem: (index: number) => void;
}

export const ListItem: FC<IListItemProps> = ({ item, id, modifyItem, deleteItem }) => {
  const { t } = useTranslation('InvoiceForm');
  const { fields, validation } = item;
  const displayValidationErrors = useRecoilValue(showItemValidationErrors);

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} mb={[12, 5, 4]}>
      <GridItem colSpan={[12, 12, 4]}>
        <FormControl id={`itemName-${id}`} isInvalid={!validation.itemName.isValid && displayValidationErrors}>
          <FormLabel display={['block', 'block', 'none']}>{t('ITEM_NAME')}</FormLabel>
          <Input type="text" onChange={(e) => modifyItem(id, 'itemName', e.target.value)} value={fields.itemName} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={[4, 4, 2]}>
        <FormControl id={`quantity-${id}`} isInvalid={!validation.quantity.isValid && displayValidationErrors}>
          <FormLabel display={['block', 'block', 'none']}>{t('QTY')}</FormLabel>
          <NumberInput
            min={1}
            precision={0}
            onChange={(_, value) => modifyItem(id, 'quantity', Number.isNaN(value) ? '' : value)}
            value={fields.quantity ?? 0}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </GridItem>
      <GridItem colSpan={[4, 4, 3]}>
        <FormControl id={`price-${id}`} isInvalid={!validation.price.isValid && displayValidationErrors}>
          <FormLabel display={['block', 'block', 'none']}>{t('PRICE')}</FormLabel>
          <NumberInput
            min={0.01}
            precision={2}
            onChange={(_, value) => modifyItem(id, 'price', Number.isNaN(value) ? '' : value)}
            value={fields.price ?? 0}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </GridItem>
      <GridItem colSpan={[3, 3, 2]}>
        <Box>
          <FormLabel display={['block', 'block', 'none']}>{t('TOTAL')}</FormLabel>
          <Box color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')} py={4} textStyle="h4" isTruncated>
            {fields.totalPrice}
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Flex alignItems="center" h="100%">
          <Icon
            as={MdDelete}
            w={6}
            h={6}
            mt={[5, 5, 0]}
            color="invoice.coolGrey"
            _hover={{ color: 'invoice.redSalsa' }}
            cursor="pointer"
            onClick={() => deleteItem(id)}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};
