import React, { useMemo, forwardRef, BaseSyntheticEvent } from 'react';
import { Box, Text, useColorModeValue, Flex, useTheme } from '@chakra-ui/react';
import Select from 'react-select';
import { customSelectStyles } from 'components';

interface ICustomSelectProps {
  label: string;
  isInvalid?: boolean;
  errorText?: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  name: string;
  value?: string;
  placeholder?: string;
}

export const CustomSelect = forwardRef<HTMLDivElement, ICustomSelectProps>(
  ({ label, isInvalid, errorText, options, onChange, name, value, placeholder, onBlur }, ref) => {
    const {
      colors: { invoice },
    } = useTheme();

    const customStyles = useMemo(
      () => customSelectStyles(useColorModeValue, invoice, isInvalid),
      [useColorModeValue, invoice, isInvalid]
    );
    return (
      <Box w="100%">
        <Flex justifyContent="space-between" mb={2}>
          <Text
            as="label"
            display="block"
            textStyle="body_1"
            color={isInvalid ? 'invoice.redSalsa' : useColorModeValue('invoice.glaucous', 'invoice.lavenderWeb')}
            mr={3}
          >
            {label}
          </Text>
          {isInvalid && (
            <Text textStyle="body_1" color="invoice.redSalsa" fontSize="0.625rem" fontWeight={600}>
              {errorText ?? ''}
            </Text>
          )}
        </Flex>
        <Select
          options={options}
          styles={customStyles}
          onChange={(option) => option && onChange(option.value)}
          name={name}
          value={options.find((c) => c.value === value)}
          inputRef={ref}
          placeholder={placeholder}
          onBlur={(event: BaseSyntheticEvent) => onBlur(event.target.value)}
        />
      </Box>
    );
  }
);

CustomSelect.displayName = 'CustomSelect';
