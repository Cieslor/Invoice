import { extendTheme, DeepPartial, ThemeConfig } from '@chakra-ui/react';

const config: DeepPartial<ThemeConfig> = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

export const theme = extendTheme({ config });
