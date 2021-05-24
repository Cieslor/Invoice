import React, { forwardRef } from 'react';
import { Flex, Text, useColorMode, Icon } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from 'assets/icon-calendar.svg';

interface ICustomDatePickerInputProps {
  value: string;
  onClick?: () => void;
}

export const CustomDatePickerInput = forwardRef<HTMLInputElement, ICustomDatePickerInputProps>(
  ({ value, onClick }, ref) => {
    const { colorMode } = useColorMode();
    return (
      <Flex
        w="100%"
        py={4}
        px={5}
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        border="1px solid"
        borderColor={colorMode === 'dark' ? 'invoice.ebonyClay' : 'invoice.lavenderWeb'}
        borderRadius="0.25rem"
        bgColor={colorMode === 'dark' ? 'invoice.spaceCadet' : 'white'}
        onClick={onClick}
        ref={ref}
      >
        <Text
          textStyle="h4"
          color={colorMode === 'dark' ? 'white' : 'invoice.richBlack'}
          pt="2px"
          mb="-2px"
          isTruncated
        >
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
