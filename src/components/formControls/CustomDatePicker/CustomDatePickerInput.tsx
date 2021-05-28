import React, { forwardRef } from 'react';
import { Flex, Text, useColorModeValue, Icon } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from 'assets/icon-calendar.svg';

interface ICustomDatePickerInputProps {
  value: string;
  onClick?: () => void;
}

export const CustomDatePickerInput = forwardRef<HTMLInputElement, ICustomDatePickerInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <Flex
        w="100%"
        py={4}
        px={5}
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        border="1px solid"
        borderColor={useColorModeValue('invoice.lavenderWeb', 'invoice.ebonyClay')}
        borderRadius="0.25rem"
        bgColor={useColorModeValue('white', 'invoice.spaceCadet')}
        onClick={onClick}
        ref={ref}
      >
        <Text textStyle="h4" color={useColorModeValue('invoice.richBlack', 'white')} pt="2px" mb="-2px" isTruncated>
          {dayjs(value).format('D MMM YYYY')}
        </Text>
        <Icon
          as={CalendarIcon}
          color="invoice.glaucous"
          w={4}
          h={4}
          sx={{
            '& path': {
              opacity: 1,
            },
          }}
        />
      </Flex>
    );
  }
);

CustomDatePickerInput.displayName = 'CustomDatePickerInput';
