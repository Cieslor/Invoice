import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Icon, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowBackIcon } from 'assets/icon-arrow-left.svg';

interface IFormSlideInContainerProps {
  showContent: boolean;
  onClose: () => void;
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

export const FormSlideInContainer: FC<IFormSlideInContainerProps> = ({ children, showContent, onClose }) => {
  const { t } = useTranslation('InvoiceForm');
  const containerBg = useColorModeValue('white', 'invoice.xiketic');

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
              maxW="720px"
              pt={[8, 14]}
              pr={[2, 8]}
              pl={[2, 8, '140px']}
              bg={containerBg}
              borderRadius={[0, '0 20px 20px 0']}
              overflow="hidden"
              zIndex={1}
            >
              <Box mb={6} display={['block', 'none']}>
                <Flex display="inline-flex" alignItems="center" onClick={onClose} cursor="pointer">
                  <Icon as={ArrowBackIcon} h={3} w={3} />
                  <Text textStyle="h4" ml={4}>
                    {t('GO_BACK')}
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
