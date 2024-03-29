import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

const CreateClientB = ({ onClose }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    notes: "",
    vatNumber: "",
    website: "",
    groups: "",
    currency: "",
    defaultLanguage: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_API_BASE}/api/admin/createClient`,
        formData
      )
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error creating employee:", error);

        toast.error(error.response.data.message);
      });
  };

  return (
    <>

      <ToastContainer></ToastContainer>
      <Box
        mx="auto"
        mt="4"
        mb={"10"}
      >
        <form onSubmit={handleSubmit}>

          <FormControl mb="4">
            <FormLabel>Client Name</FormLabel>
            <Input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Contact Name</FormLabel>
            <Input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Industry</FormLabel>
            <Input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Note</FormLabel>
            <Input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Vat Number</FormLabel>
            <Input
              type="number"
              name="vatNumber"
              value={formData.vatNumber}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Website</FormLabel>
            <Input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Groups</FormLabel>
            <Input
              type="text"
              name="groups"
              value={formData.groups}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Currency</FormLabel>
            <Input
              type="text"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Default Language</FormLabel>
            <Input
              type="text"
              name="defaultLanguage"
              value={formData.defaultLanguage}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Zip Code</FormLabel>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </FormControl>
          <Flex justify="end" mt={6} gap={2}>
            <Button onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme="purple">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default CreateClientB;
