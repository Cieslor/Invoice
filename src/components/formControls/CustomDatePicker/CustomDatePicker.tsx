import React, { FC, createElement } from 'react';
import { Box, useColorModeValue, FormLabel } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePickerInput, customDatePickerStyles } from 'components';

interface ICustomDatePickerProps {
  isDisabled?: boolean;
  date: Date;
  onChange: (...event: any[]) => void;
  label: string;
}

export const CustomDatePicker: FC<ICustomDatePickerProps> = ({ isDisabled, date, onChange, label }) => {
  return (
    <Box w="100%" sx={{ ...customDatePickerStyles(useColorModeValue) }}>
      <FormLabel>{label}</FormLabel>
      <DatePicker
        showPopperArrow={false}
        selected={date}
        onChange={onChange}
        customInput={createElement(CustomDatePickerInput)}
        disabled={isDisabled}
        fixedHeight
        popperPlacement="auto"
      />
    </Box>
  );
};
