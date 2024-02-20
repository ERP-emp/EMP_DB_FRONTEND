import { useState } from "react";
import {
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import reactLogo from "../assets/react.svg";
import Navbar from "./Navbar";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
});

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Dummy data for the table
  const tableData = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    // Add more dummy data as needed
  ];

  return (
    <ChakraProvider theme={theme}>
        <Navbar className="mt-0"></Navbar>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        Click here
      </Box>
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Heading mb={4}>Counter App</Heading>
        <Text fontSize="xl" mb={4}>
          Count: {count}
        </Text>
        <Flex>
          <Button colorScheme="blue" mr={2} onClick={increment}>
            Increment
          </Button>
          <Button colorScheme="red" onClick={decrement}>
            Decrement
          </Button>
        </Flex>
        <div className="mt-5"></div>
        <Table variant="striped" colorScheme="teal" maxW="800px">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td>{data.id}</Td>
                <Td>{data.name}</Td>
                <Td>{data.age}</Td>
                <Td>{data.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      </Flex>
    </ChakraProvider>
  );
}

export default Home;