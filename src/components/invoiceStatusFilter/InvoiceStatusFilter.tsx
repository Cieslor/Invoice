import React, { FC } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  Text,
  Box,
  useColorModeValue,
  Checkbox,
  CheckboxGroup,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { selectedStatusFilters } from 'state';
import { InvoiceStatus } from 'models';

const statusOptions = (t: TFunction) => [
  { value: InvoiceStatus.Draft, label: t('InvoiceList:DRAFT') },
  {
    value: InvoiceStatus.Pending,
    label: t('InvoiceList:PENDING'),
  },
  { value: InvoiceStatus.Paid, label: t('InvoiceList:PAID') },
];

export const InvoiceStatusFilter: FC = () => {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useRecoilState(selectedStatusFilters);

  return (
    <Menu placement="bottom" offset={[0, 24]} autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton as={Box} cursor="pointer" textStyle="h4" color={useColorModeValue('invoice.richBlack', 'white')}>
            <Text display={['none', 'none', 'inline-block']}>Filter by status</Text>
            <Text display={['inline-block', 'inline-block', 'none']}>Filter</Text>
            <Icon
              as={IoIosArrowDown}
              w={4}
              h={4}
              ml={4}
              color="invoice.mediumSlateBlue"
              transform={isOpen ? 'rotate(180deg)' : ''}
              transition="all .2s ease"
            />
          </MenuButton>
          <MenuList
            minWidth="192px"
            p={6}
            bg={useColorModeValue('white', 'invoice.ebonyClay')}
            boxShadow={useColorModeValue('0px 10px 20px rgba(72, 84, 159, 0.25)', '0px 10px 20px rgba(0, 0, 0, 0.25)')}
            border="none"
            borderRadius="0.5rem"
          >
            <CheckboxGroup
              onChange={(value) => setSelectedFilters(value as InvoiceStatus[])}
              defaultValue={selectedFilters}
            >
              <VStack spacing={4} alignItems="flex-start">
                {statusOptions(t).map((option) => (
                  <Checkbox
                    key={option.label}
                    value={option.value}
                    spacing={3}
                    iconColor="white"
                    sx={{
                      '& .chakra-checkbox__label': {
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        lineHeight: '1.25em',
                        letterSpacing: '-0.25px',
                      },
                      '& .chakra-checkbox__control': {
                        bg: useColorModeValue('invoice.lavenderWeb', 'invoice.spaceCadet'),
                        '&[data-checked]': {
                          bg: 'invoice.mediumSlateBlue',
                          borderColor: 'invoice.mediumSlateBlue',
                        },
                      },
                    }}
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
