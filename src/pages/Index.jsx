import { Box, Flex, Text, VStack, Input, Button, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaUserAlt, FaEllipsisH } from 'react-icons/fa';

const Index = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <Flex height="100vh" overflow="hidden">
      {/* Navigation Bar */}
      <Box width={isLargerThan1280 ? "15%" : "20%"} bg="blue.500" color="white" p={4}>
        <VStack align="stretch" spacing={4}>
          <IconButton aria-label="Twitter Icon" icon={<FaTwitter size="24px" />} variant="ghost" fontSize="2xl" />
          <Button leftIcon={<FaHome />} justifyContent="flex-start">Home</Button>
          <Button leftIcon={<FaHashtag />} justifyContent="flex-start">Explore</Button>
          <Button leftIcon={<FaBell />} justifyContent="flex-start">Notifications</Button>
          <Button leftIcon={<FaEnvelope />} justifyContent="flex-start">Messages</Button>
          <Button leftIcon={<FaUserAlt />} justifyContent="flex-start">Profile</Button>
          <Button leftIcon={<FaEllipsisH />} justifyContent="flex-start">More</Button>
        </VStack>
      </Box>

      {/* Main Feed */}
      <Box flex="1" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Home</Text>
          <Input placeholder="What's happening?" />
          <Button colorScheme="blue">Tweet</Button>
          {/* Placeholder for tweets */}
          <Flex direction="column" align="stretch" overflowY="auto">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">John Doe</Text>
              <Text mt={2}>Hello Twitter! This is my first tweet.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" mt={4}>
              <Text fontWeight="bold">Jane Smith</Text>
              <Text mt={2}>Loving the new Twitter features!</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* Sidebar for Trending Topics */}
      <Box width={isLargerThan1280 ? "20%" : "25%"} bg="gray.100" p={4}>
        <VStack align="stretch" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">Trending</Text>
          <Text>#JavaScript</Text>
          <Text>#ReactJS</Text>
          <Text>#ChakraUI</Text>
          <Text>#WebDevelopment</Text>
          <Text>#Coding</Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;