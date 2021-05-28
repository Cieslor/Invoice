import { extendTheme, DeepPartial, ThemeConfig } from '@chakra-ui/react';
import { colors, fonts, textStyles, Button, Input, FormLabel, FormError } from 'helpers';

const config: DeepPartial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Input,
    FormLabel,
    FormError,
  },
});
