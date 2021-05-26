import { useColorModeValue } from '@chakra-ui/react';

export const customSelectStyles = (
  colorModeValue: typeof useColorModeValue,
  colors: { [key: string]: string },
  isInvalid: boolean = false
) => ({
  container: (provided: { [key: string]: string }) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: { [key: string]: string }) => ({
    ...provided,
    backgroundColor: colorModeValue('white', colors.spaceCadet),
    borderRadius: '0.25rem',
    borderWidth: '1px',
    borderColor: isInvalid ? `${colors.redSalsa} !important` : colorModeValue(colors.lawenderWeb, colors.ebonyClay),
    cursor: 'pointer',
    '&:hover, &:focus': {
      borderColor: colorModeValue(colors.mediumPurple, colors.ebonyClay),
    },
  }),
  valueContainer: (provided: { [key: string]: string }) => ({
    ...provided,
    padding: '1rem 1.25rem',
    margin: '1px 0',
    fontSize: '0.75rem',
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
  }),
  singleValue: (provided: { [key: string]: string }) => ({
    ...provided,
    fontWeight: 700,
    margin: 0,
    color: colorModeValue(colors.richBlack, 'white'),
  }),
  input: () => ({
    padding: 0,
    '& input': {
      width: 0,
    },
  }),
  placeholder: (provided: { [key: string]: string }) => ({
    ...provided,
    color: colorModeValue(colors.richBlack, 'white'),
    fontWeight: 700,
    opacity: colorModeValue(0.4, 1),
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: { [key: string]: string }) => ({
    ...provided,
    color: isInvalid ? `${colors.redSalsa} !important` : colors.mediumSlateBlue,
    '&:hover': {
      color: colors.mediumSlateBlue,
    },
  }),
  menu: (provided: { [key: string]: string }) => ({
    ...provided,
    backgroundColor: colorModeValue('white', colors.ebonyClay),
    borderRadius: '0.5rem',
    boxShadow: colorModeValue('0px 10px 20px rgba(72, 84, 159, 0.25)', '0px 10px 20px rgba(0, 0, 0, 0.25)'),
    overflow: 'hidden',
  }),
  menuList: (provided: { [key: string]: string }) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided: { [key: string]: string }, state: { isSelected: boolean }) => ({
    ...provided,
    padding: '1rem 1.25rem',
    color: state.isSelected
      ? colorModeValue(colors.mediumSlateBlue, colors.mediumPurple)
      : colorModeValue(colors.richBlack, colors.lawenderWeb),
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
    backgroundColor: colorModeValue('white', 'invoice.ebonyClay'),
    cursor: 'pointer',
    '&:hover': {
      color: colorModeValue(colors.mediumSlateBlue, colors.mediumPurple),
      backgroundColor: colorModeValue('white', colors.ebonyClay),
    },
    '&:not(:last-child)': {
      borderBottom: `1px solid ${colorModeValue(colors.lavenderWeb, colors.spaceCadet)}`,
    },
  }),
});
