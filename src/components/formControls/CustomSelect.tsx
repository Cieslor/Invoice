import React, { FC, useMemo } from 'react';
import { Box, Text, useColorMode, Flex, useTheme } from '@chakra-ui/react';
import Select from 'react-select';

interface ICustomSelectProps {
  label: string;
  isInvalid?: boolean;
  errorText?: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const CustomSelect: FC<ICustomSelectProps> = ({ label, isInvalid, errorText, options, onChange }) => {
  const { colorMode } = useColorMode();
  const {
    colors: { invoice },
  } = useTheme();

  const customSelectStyles = useMemo(
    () => ({
      container: (provided: { [key: string]: string }) => ({
        ...provided,
        width: '100%',
      }),
      control: (provided: { [key: string]: string }) => ({
        ...provided,
        backgroundColor: colorMode === 'dark' ? invoice.spaceCadet : 'white',
        borderRadius: '0.25rem',
        borderWidth: '1px',
        borderColor: isInvalid
          ? `${invoice.redSalsa} !important`
          : colorMode === 'dark'
          ? invoice.ebonyClay
          : invoice.lawenderWeb,
        cursor: 'pointer',
        '&:hover': {
          borderColor: colorMode === 'dark' ? invoice.ebonyClay : invoice.mediumPurple,
        },
        '&:focus': {
          borderColor: colorMode === 'dark' ? invoice.ebonyClay : invoice.mediumPurple,
        },
      }),
      valueContainer: (provided: { [key: string]: string }) => ({
        ...provided,
        padding: '1rem 1.25rem',
        fontSize: '0.75rem',
        lineHeight: '1.25em',
        letterSpacing: '-0.25px',
      }),
      singleValue: (provided: { [key: string]: string }) => ({
        ...provided,
        fontWeight: 700,
        margin: 0,
        color: colorMode === 'dark' ? 'white' : invoice.richBlack,
      }),
      input: () => ({
        padding: 0,
        '& input': {
          width: 0,
        },
      }),
      placeholder: (provided: { [key: string]: string }) => ({
        ...provided,
        color: colorMode === 'dark' ? 'white' : invoice.richBlack,
        fontWeight: 700,
        opacity: colorMode === 'dark' ? 1 : 0.4,
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
      dropdownIndicator: (provided: { [key: string]: string }) => ({
        ...provided,
        color: isInvalid ? `${invoice.redSalsa} !important` : invoice.mediumSlateBlue,
        '&:hover': {
          color: invoice.mediumSlateBlue,
        },
      }),
      menu: (provided: { [key: string]: string }) => ({
        ...provided,
        backgroundColor: colorMode === 'dark' ? invoice.ebonyClay : 'white',
        borderRadius: '0.5rem',
        boxShadow: colorMode === 'dark' ? '0px 10px 20px rgba(0, 0, 0, 0.25)' : '0px 10px 20px rgba(72, 84, 159, 0.25)',
        overflow: 'hidden',
      }),
      menuList: (provided: { [key: string]: string }) => ({
        ...provided,
        padding: 0,
      }),
      option: (provided: { [key: string]: string }, state: { isSelected: boolean }) => ({
        ...provided,
        padding: '1rem 1.25rem',
        color:
          colorMode === 'dark'
            ? state.isSelected
              ? invoice.mediumPurple
              : invoice.lawenderWeb
            : state.isSelected
            ? invoice.mediumSlateBlue
            : invoice.richBlack,
        fontSize: '0.75rem',
        fontWeight: 700,
        lineHeight: '1.25em',
        letterSpacing: '-0.25px',
        backgroundColor: colorMode === 'dark' ? invoice.ebonyClay : 'white',
        cursor: 'pointer',
        '&:hover': {
          color: colorMode === 'dark' ? invoice.mediumPurple : invoice.mediumSlateBlue,
          backgroundColor: colorMode === 'dark' ? invoice.ebonyClay : 'white',
        },
        '&:not(:last-child)': {
          borderBottom: `1px solid ${colorMode === 'dark' ? invoice.spaceCadet : invoice.lavenderWeb}`,
        },
      }),
    }),
    [colorMode]
  );
  return (
    <Box w="100%">
      <Flex justifyContent="space-between" mb={2}>
        <Text
          as="label"
          display="block"
          textStyle="body_1"
          color={isInvalid ? 'invoice.redSalsa' : colorMode === 'dark' ? 'invoice.lavenderWeb' : 'invoice.glaucous'}
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
      <Select options={options} styles={customSelectStyles} onChange={(option) => option && onChange(option.value)} />
    </Box>
  );
};
