import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import logoBackground from 'assets/logo-background.png';
import { ColorModeSwitcher, Logo, Profile } from 'components';

export const SideBar: FC = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      flexDirection={['row', 'row', 'column']}
      w={['100%', '100%', '100px']}
      h={['70px', '80px', '100vh']}
      bgColor={useColorModeValue('invoice.oxfordBlue', 'invoice.spaceCadet')}
      borderRadius={[0, 0, '0 20px 20px 0']}
      zIndex="99"
    >
      <Flex
        flexDirection={['row', 'row', 'column']}
        justifyContent="space-between"
        alignItems="center"
        flex={1}
        pb={[0, 0, 7]}
        pr={[6, 6, 0]}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          w={['70px', '80px', '100px']}
          h={['70px', '80px', '100px']}
          bgImage={logoBackground}
          bgSize={['70px 70px', '80px 80px', '100px 100px']}
        >
          <Link to="/">
            <Logo color="white" size={[7, 8, 10]} />
          </Link>
        </Flex>
        <ColorModeSwitcher />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w={['70px', '80px', '100px']}
        h={['70px', '80px', '100px']}
        borderTop={['none', 'none', '1px solid #494E6E']}
        borderLeft={['1px solid #494E6E', '1px solid #494E6E', 'none']}
      >
        <Profile />
      </Flex>
    </Flex>
  );
};
