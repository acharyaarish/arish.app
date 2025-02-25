import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  const bg = useColorModeValue('#f7fafc', '#1a202c');
  const quoteBg = useColorModeValue('#2c5282', '#63b3ed'); // Light: Dark Blue, Dark: Darker Grayish Blue
  const textColor = useColorModeValue('#2d3748', '#e2e8f0');
  const quoteColor = useColorModeValue('#ffffff', '#f7fafc');

  return (
    <Box id="about" bg={bg} py={20} px={6}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
          justify="space-between"
          height="100%"
          gap={10}
        >
          {/* 30% Quote Section */}
          <Box
            flex={{ base: '0 0 100%', md: '0 0 30%' }}
            bg={quoteBg}
            p={8}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
            minHeight="300px"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
          >
            <Text
              as={motion.h3}
              fontSize={{ base: '2xl', md: '3xl' }}
              color={quoteColor}
              fontWeight="bold"
              lineHeight="short"
              whileHover={{ scale: 1.05 }}
              transition="0.3s"
            >
              "Data is the new oil, and I’m here to refine it!" ⚙️
            </Text>
          </Box>

          {/* 70% Text Section */}
          <VStack
            flex={{ base: '0 0 100%', md: '0 0 70%' }}
            spacing={6}
            align={{ base: 'center', md: 'flex-start' }}
            maxW="container.md"
            mx={{ base: 'auto', md: 0 }}
          >
            <Heading
              size="2xl"
              color={quoteBg}
              fontWeight="extrabold"
              textAlign={{ base: 'center', md: 'left' }}
            >
              About Me 👋
            </Heading>
            <Text fontSize="lg" fontWeight="bold" lineHeight="short" textAlign={{ base: 'center', md: 'left' }}>
              Tech Enthusiast, Coffee Lover & Adventurer ☕🏔️
            </Text>
            <Text fontSize="md" lineHeight="taller" textAlign={{ base: 'center', md: 'left' }} color={textColor}>
            It all started with 🎮 modding games, tweaking settings, and breaking my PC just to fix it again. Then came the OS experiments: dual-booting Linux, Windows XP, 7, 10 (because why not?), and becoming the neighborhood tech support 💻📶. I even turned a Raspberry Pi into a movie server 🎞️ (because subscriptions are overrated).
            From fixing networks to working on an ERP project 📊, I moved into data automation for Austriathlon 🏃‍♂️💨, working alongside a Data Lead who took Australia to the Olympics. Now, I'm leveling up my React skills ⚛️, building cool UIs, and still making the best ☕ at home.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
