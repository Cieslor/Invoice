import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, useTheme, useColorMode, Icon, Text, Flex } from '@chakra-ui/react';
import { ReactComponent as ArrowBackIcon } from 'assets/icon-arrow-left.svg';

interface IFormSlideInContainerProps {
  showContent: boolean;
  close: () => void;
}

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
  },
};

const innerVariants = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'circIn',
    },
  },
};

export const FormSlideInContainer: FC<IFormSlideInContainerProps> = ({ children, showContent, close }) => {
  const {
    colors: { invoice },
  } = useTheme();

  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      as={motion.div}
      top={['70px', '80px', 0]}
      left="0"
      h="100%"
      w="100%"
      zIndex={1}
      pointerEvents={showContent ? 'all' : 'none'}
    >
      <AnimatePresence exitBeforeEnter>
        {showContent && (
          <>
            <Box
              as={motion.div}
              position="absolute"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="black"
              opacity={0.5}
              zIndex={-1}
            />
            <Box
              as={motion.div}
              variants={innerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              h={['calc(100% - 70px)', 'calc(100% - 80px)', '100%']}
              w="100%"
              maxW={['100%', '600px', '720px']}
              pt={[8, 14]}
              pr={[6, 14]}
              pl={[6, 14, '156px']}
              bg={colorMode === 'dark' ? invoice.xiketic : 'white'}
              borderRadius={[0, '0 20px 20px 0']}
              overflowY="auto"
              zIndex={1}
            >
              <Box mb={6} display={['block', 'none']}>
                <Flex display="inline-flex" alignItems="center" onClick={close} cursor="pointer">
                  <Icon as={ArrowBackIcon} h={3} w={3} />
                  <Text textStyle="h4" ml={4}>
                    Go back
                  </Text>
                </Flex>
              </Box>
              {children}
            </Box>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};
