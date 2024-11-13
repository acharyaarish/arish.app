import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Progress,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Experience = () => {
  const sectionBg = useColorModeValue(
    'linear-gradient(135deg, #F7FAFC 0%, #E3F2FD 100%)',
    'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)'
  );
  const sectionColor = useColorModeValue('#2D3748', '#E2E8F0');
  const cardBg = useColorModeValue('#FFFFFF', '#2D3748');
  const headingColor = useColorModeValue('#2B6CB0', '#FFD700');
  const textColor = useColorModeValue('#2D3748', '#E2E8F0');
  const secondaryTextColor = useColorModeValue('#718096', '#A0AEC0');
  const tagHoverColor = useColorModeValue('teal.600', 'teal.300');

  const experiences = [
    {
      logo: `${process.env.PUBLIC_URL}/img/austriathlon-logo.png`,
      date: 'Mar 2024 – Jul 2024',
      company: 'AusTriathlon',
      link: 'https://www.triathlon.org.au/',
      hoverColor: 'rgba(33, 150, 243, 0.15)',
      location: 'Canberra, Australia',
      title: 'Data Analyst Intern',
      description: [
        'Automated large sets of triathlon cycling national and international datasets, reducing manual effort by 100% in calculation and visulization of laps.',
        'Collaborated on innovative solutions to complex problems through advanced research.',
        'Developed race lap calculations using Python and PowerBI to enhance player performance analysis.',
      ],
      tags: ['Python', 'R', 'PowerBI', 'Analytics'],
      progress: 90,
      learning: 'Gained deep insights into data automation and sports analytics using Python, R and PowerBI.'
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/shoesandsox-logo.png`,
      date: 'August 2022 – Present',
      company: 'Shoes and Sox',
      link: 'https://www.shoesandsox.com.au',
      hoverColor: 'rgba(255, 165, 0, 0.15)',
      location: 'Canberra, Australia',
      title: 'Sales Assistant',
      description: [
        'I developed strong administrative, analytical, and communication skills by assisting customers in product selection, managing daily tasks such as sales reporting, tracking KPIs, analyzing top-performing and underperforming products, and collaborating with management on budget oversight.',
        'Contributed to launching a new loyalty program, wrote documentation, and trained team members on the new system.',
      ],
      tags: ['Sales Analysis', 'Data Reporting', 'Cost Optimization'],
      progress: 90,
      learning: 'Learned how data-driven decisions impact sales and efficiency.'
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/nepaloilcorp-logo.png`,
      date: 'Nov 2020 – Nov 2021',
      company: 'Nepal Oil Corporation',
      link: 'https://noc.org.np/',
      hoverColor: 'rgba(244, 67, 54, 0.15)',
      location: 'Kathmandu, Nepal',
      title: 'IT Data & Systems Analyst',
      description: [
        'Worked closely with project managers and stakeholders to lead cross-functional teams in configuring networks across all branches nationwide, ensuring consistent and efficient implementation.',
        'Provided remote technical support, resolving network issues and documenting IT systems to maintain operational efficiency.',
        'Customized SAP B1 to align with specific organizational requirements.',
      ],
      tags: ['ERP', 'IT Management', 'Training'],
      progress: 95,
      learning: 'Mastered ERP deployment and IT management, ensuring system uptime and effective training.'
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/outsource-array-logo.png`,
      date: 'Nov 2019 – Feb 2020',
      company: 'Outsource Array',
      link: 'https://www.outsourcearray.com',
      hoverColor: 'rgba(76, 175, 80, 0.15)',
      location: 'Kathmandu, Nepal',
      title: 'Network Engineer Intern',
      description: [
        'Configured networking devices and created VLANs to segment network traffic, improving security and preventing unauthorized access.',
        'Implemented tailored access control policies based on user roles, ensuring that only authorized individuals have access to sensitive data and systems.',
      ],
      tags: ['Networking', 'Security', 'LAN/WAN'],
      progress: 80,
      learning: 'Gained experience in networking and security, focusing on performance optimization.'
    },
  ];

  return (
    <Box as="section" bg={sectionBg} color={sectionColor} py={20} px={4} id="experience" position="relative">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          mb={12}
          color={headingColor}
          textAlign="center"
          fontFamily="Poppins, sans-serif"
          fontWeight="extrabold"
          letterSpacing="wide"
        >
          Experience 👨‍💻
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                bg={cardBg}
                color={textColor}
                p={8}
                borderRadius="lg"
                boxShadow="2xl"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: experience.hoverColor,
                  zIndex: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 0,
                }}
                _hover={{
                  _before: {
                    opacity: 1,
                  },
                  boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-10px)',
                }}
                transition="background-color 0.3s ease, transform 0.3s ease"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Flex align="center" mb={4} zIndex={1} position="relative">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    borderRadius="full"
                    boxSize={{ base: "60px", md: "70px" }}
                    mr={4}
                    objectFit="contain"
                  />
                  <Box textAlign="left">
                    <Link href={experience.link} isExternal fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color={headingColor} _hover={{ textDecoration: 'underline' }}>
                      {experience.company}
                    </Link>
                    <Text fontSize={{ base: "sm", md: "md" }} color={secondaryTextColor} fontStyle="italic">
                      {experience.location}
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }} color={secondaryTextColor}>
                      {experience.date}
                    </Text>
                  </Box>
                </Flex>
                <Box textAlign="center" mb={4} zIndex={1} position="relative">
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "xl" }}
                    color={headingColor}
                    fontFamily="Poppins, sans-serif"
                    letterSpacing="wider"
                  >
                    {experience.title}
                  </Text>
                </Box>
                <Box as="ul" pl={4} mt={4} color={textColor} textAlign="left" zIndex={1} position="relative">
                  {experience.description.map((desc, i) => (
                    <Text as="li" mb={3} key={i} display="flex" alignItems="center" fontSize="sm">
                      <Box as="span" color={headingColor} mr={2}>•</Box> {desc}
                    </Text>
                  ))}
                </Box>
                <Wrap mt={4} spacing={2} justify="center">
                  {experience.tags.map((tag, i) => (
                    <WrapItem key={i}>
                      <Tag
                        size="md"
                        variant="solid"
                        colorScheme="teal"
                        borderRadius="full"
                        cursor="pointer"
                        _hover={{ transform: "scale(1.2)", backgroundColor: tagHoverColor }}
                        transition="all 0.3s ease-in-out"
                      >
                        {tag}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
                <Box mt={4}>
                  <Text fontSize="sm" fontWeight="bold" color={headingColor}>
                    Impact & Performance:
                  </Text>
                  <Progress colorScheme="teal" size="sm" value={experience.progress} mt={2} borderRadius="md" />
                </Box>
                <Box mt={4}>
                  <Text fontSize="sm" fontWeight="bold" color={headingColor}>
                    Key Learning:
                  </Text>
                  <Text fontSize="sm" mt={2} color={secondaryTextColor}>
                    {experience.learning}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Experience;