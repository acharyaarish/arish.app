import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Image,
  HStack,
  useColorMode,
  Collapse,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  const [scrolled, setScrolled] = useState(false);

  // Scroll handler to change navbar background when scrolled
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Colors and styles
  const textColor = '#FFFFFF';
  const primaryColor = '#FFD700';
  const bgOnScroll = scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent';
  const mobileMenuBg = 'rgba(0, 0, 0, 0.95)';

  const fontSize = useBreakpointValue({ base: 'lg', md: 'md' });
  const iconSize = useBreakpointValue({ base: '26px', md: '28px' });
  const paddingY = useBreakpointValue({ base: '8px', md: '10px' });
  const logoSize = useBreakpointValue({ base: '36px', md: '40px' });

  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <Box
      as="nav"
      px={{ base: 4, md: 6 }}
      py={paddingY}
      position="fixed"
      w="100%"
      zIndex="10"
      bg={bgOnScroll}
      transition="background-color 0.2s ease"
      boxShadow={scrolled ? 'lg' : 'none'}
    >
      <Flex h="full" alignItems="center" justifyContent="space-between">
        <ChakraLink as={ScrollLink} to="header" smooth duration={500} offset={-50}>
          <Image
            src={`${process.env.PUBLIC_URL}/img/logo-updated.png`}
            alt="Logo"
            boxSize={logoSize}
            objectFit="contain"
            cursor="pointer"
            transition="transform 0.2s ease"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </ChakraLink>

        <HStack as="nav" spacing={5} display={{ base: 'none', md: 'flex' }} mx="auto">
          {sections.map((section) => (
            <ChakraLink
              as={ScrollLink}
              to={section.id}
              smooth
              duration={500}
              key={section.id}
              fontSize={fontSize}
              fontWeight="medium"
              color={textColor}
              cursor="pointer"
              textDecoration="none"
              px={3}
              py={1}
              _hover={{ color: primaryColor }}
              transition="color 0.15s ease"
            >
              {section.name}
            </ChakraLink>
          ))}
        </HStack>

        <Flex alignItems="center">
          <IconButton
            onClick={toggleColorMode}
            icon={isLightMode ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle Color Mode"
            bg="transparent"
            color={primaryColor}
            _hover={{ color: textColor }}
            boxSize={iconSize}
            transition="all 0.3s ease, transform 0.3s ease"
            _active={{ transform: 'scale(1.1)' }}
          />

          <IconButton
            size="lg"
            icon={
              isOpen ? (
                <motion.div animate={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                  <HamburgerIcon />
                </motion.div>
              )
            }
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color={textColor}
            _hover={{ color: primaryColor }}
            boxSize={iconSize}
            ml={3}
            transition="all 0.2s ease"
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: mobileMenuBg,
            color: textColor,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <IconButton
            icon={<CloseIcon />}
            aria-label="Close Menu"
            position="absolute"
            top="20px"
            right="20px"
            bg="transparent"
            color={primaryColor}
            onClick={onClose}
            _hover={{ color: textColor }}
            transition="color 0.2s ease"
          />
          {sections.map((section) => (
            <ChakraLink
              as={ScrollLink}
              to={section.id}
              smooth
              duration={500}
              key={section.id}
              fontSize="lg"
              fontWeight="bold"
              color={textColor}
              cursor="pointer"
              textDecoration="none"
              py={2}
              _hover={{ color: primaryColor }}
              onClick={onClose}
            >
              {section.name}
            </ChakraLink>
          ))}
        </motion.div>
      </Collapse>
    </Box>
  );
};

export default Navbar;
