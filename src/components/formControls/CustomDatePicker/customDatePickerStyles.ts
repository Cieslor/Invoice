import arrowLeft from 'assets/icon-arrow-left.svg';
import arrowRight from 'assets/icon-arrow-right.svg';
import { useColorModeValue } from '@chakra-ui/react';

export const customDatePickerStyles = (colorModeValue: typeof useColorModeValue) => ({
  '& .react-datepicker-wrapper': {
    width: '100%',
  },
  '& .react-datepicker-popper[data-placement^="bottom"]': {
    marginTop: '1.5rem',
  },
  '& .react-datepicker': {
    fontFamily: 'inherit',
    color: colorModeValue('invoice.richBlack', 'invoice.lavenderWeb'),
    backgroundColor: colorModeValue('white', 'invoice.ebonyClay'),
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: colorModeValue('0px 10px 20px rgba(72, 84, 159, 0.25)', '0px 10px 20px rgba(0, 0, 0, 0.25)'),
  },
  '& .react-datepicker__header': {
    paddingTop: '1.5rem',
    paddingBottom: '2rem',
    backgroundColor: colorModeValue('white', 'invoice.ebonyClay'),
    borderBottom: 'none',
    borderRadius: '0.5rem 0.5rem 0 0',
  },
  '& .react-datepicker__navigation': {
    top: 'calc(1.5rem + 1px)',
    border: 'none',
    borderColor: 'transparent',
    backgroundRepeat: 'no-repeat',
  },
  '& .react-datepicker__navigation--previous': {
    backgroundImage: arrowLeft,
  },
  '& .react-datepicker__navigation--next': {
    backgroundImage: arrowRight,
  },
  '& .react-datepicker__current-month': {
    color: colorModeValue('invoice.richBlack', 'invoice.lavenderWeb'),
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
  },
  '& .react-datepicker__day-names': {
    display: 'none',
  },
  '& .react-datepicker__month': {
    margin: 0,
    padding: '0 0.5rem 2rem',
  },
  '& .react-datepicker__week:not(:last-child)': {
    marginBottom: '0.8rem',
  },
  '& .react-datepicker__day': {
    width: '1rem',
    margin: '0 0.5rem',
    color: colorModeValue('invoice.richBlack', 'invoice.lavenderWeb'),
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
    outline: 'none',
    '&:hover, &--selected, &--keyboard-selected': {
      backgroundColor: colorModeValue('white', 'invoice.ebonyClay'),
      color: 'invoice.mediumSlateBlue',
    },
  },
});
