import {
  Box,
  Center,
  ChakraProvider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Box w="100vw" h="100vh">
        <Center h="100%">
          <VStack>
            <Heading>Lanh&apos;s Blog</Heading>
            <Text>🚧 🚧 Building 🚧 🚧</Text>
          </VStack>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default App;
