import { extendTheme, DeepPartial, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { colors, fonts, textStyles, Button, Input, FormLabel, FormError } from 'helpers';

const config: DeepPartial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('invoice.richBlack', 'white')(props),
      },
    }),
  },
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
