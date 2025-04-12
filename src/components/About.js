import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  const bg = useColorModeValue("#f7fafc", "#1a202c");
  const quoteBg = useColorModeValue("#2c5282", "#63b3ed"); // Light: Dark Blue, Dark: Darker Grayish Blue
  const textColor = useColorModeValue("#2d3748", "#e2e8f0");
  const quoteColor = useColorModeValue("#ffffff", "#f7fafc");

  return (
    <Box id="about" bg={bg} py={20} px={6}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          height="100%"
          gap={10}
        >
          {/* 30% Quote Section */}
          <Box
            flex={{ base: "0 0 100%", md: "0 0 30%" }}
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
              fontSize={{ base: "2xl", md: "3xl" }}
              color={quoteColor}
              fontWeight="bold"
              lineHeight="short"
              whileHover={{ scale: 1.05 }}
              transition="0.3s"
            >
              "It was broken. Now it’s shipped." 📦💪
            </Text>
          </Box>

          {/* 70% Text Section */}
          <VStack
            flex={{ base: "0 0 100%", md: "0 0 70%" }}
            spacing={6}
            align={{ base: "center", md: "flex-start" }}
            maxW="container.md"
            mx={{ base: "auto", md: 0 }}
          >
            <Heading
              size="2xl"
              color={quoteBg}
              fontWeight="extrabold"
              textAlign={{ base: "center", md: "left" }}
            >
              About Me 👋
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="bold"
              lineHeight="short"
              textAlign={{ base: "center", md: "left" }}
            >
              Tech Enthusiast, Coffee Lover & Adventurer ☕🏔️
            </Text>
            <Text
              fontSize="md"
              lineHeight="taller"
              textAlign={{ base: "center", md: "left" }}
              color={textColor}
            >
              Hi, I’m Arish — a hands-on techie turned frontend developer, with
              a background in IT support, networks, and ERP rollouts. I fix
              things, build better ones, and learn fast. Give me a problem and
              some time — I’ll solve it, cleanly and creatively. Currently deep
              into React ⚛️, Next.js 🚀, and making UIs that just work.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
