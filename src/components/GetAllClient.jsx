import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "./Navbar";

const GetAllClient = () => {
  const [managers, setManagers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedManager, setSelectedManager] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://w5dfhwejp7.execute-api.ap-south-1.amazonaws.com/api/admin/getAllClients"
        );
        setManagers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleMoreInfo = (manager) => {
    setSelectedManager(manager);
    onOpen();
  };

  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="center" pt={10}>
        <Table variant="striped" colorScheme="red" width="60%">
          <Thead>
            <Tr>
              <Th fontWeight="bold">Name</Th>
              <Th fontWeight="bold">Phone</Th>
              <Th fontWeight="bold">Industry</Th>
              <Th fontWeight="bold">Country</Th>
              <Th fontWeight="bold">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {managers.map((manager) => (
              <Tr key={manager._id}>
                <Td fontWeight="bold">{manager.clientName}</Td>
                <Td fontWeight="bold">{manager.phone}</Td>
                <Td fontWeight="bold">{manager.industry}</Td>
                <Td fontWeight="bold">{manager.country}</Td>
                <Td>
                  <Button
                    colorScheme="yellow"
                    onClick={() => handleMoreInfo(manager)}
                  >
                    More Info
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Employee Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedManager && (
              <div>
                <Text fontWeight="bold">Name: </Text>
                <Text>{selectedManager.clientName}</Text>
                <Text fontWeight="bold">Contact Name: </Text>
                <Text>{selectedManager.contactName}</Text>
                <Text fontWeight="bold">Email: </Text>
                <Text>{selectedManager.email}</Text>
                <Text fontWeight="bold">Phone: </Text>
                <Text>{selectedManager.phone}</Text>
                <Text fontWeight="bold">Industry: </Text>
                <Text>{selectedManager.industry}</Text>
                <Text fontWeight="bold">Notes: </Text>
                <Text>{selectedManager.notes}</Text>
                <Text fontWeight="bold">Website: </Text>
                <Text>{selectedManager.website}</Text>
                <Text fontWeight="bold">Currency: </Text>
                <Text>{selectedManager.currency}</Text>
                <Text fontWeight="bold">Default Language: </Text>
                <Text>{selectedManager.defaultLanguage}</Text>
                <Text fontWeight="bold">Address: </Text>
                <Text>{selectedManager.address}</Text>
                <Text fontWeight="bold">City: </Text>
                <Text>{selectedManager.city}</Text>
                <Text fontWeight="bold">State: </Text>
                <Text>{selectedManager.state}</Text>
                <Text fontWeight="bold">ZipCode: </Text>
                <Text>{selectedManager.zipCode}</Text>
                <Text fontWeight="bold">Country: </Text>
                <Text>{selectedManager.country}</Text>
                <Text fontWeight="bold">Status: </Text>
                <Text>{selectedManager.status}</Text>
                <Text fontWeight="bold">Client ID: </Text>
                <Text>{selectedManager.client_id}</Text>
                <Text fontWeight="bold">Groups:</Text>
                {selectedManager.groups.map((permission, index) => (
                  <Text key={index}>{permission}</Text>
                ))}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GetAllClient;