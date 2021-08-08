import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Badge,
  Heading,
  Link,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Heading as="h1" mb="4">
        Dashboard
      </Heading>
      <Heading size="lg">Incoming payrolls</Heading>
      <Stat
        border="1px solid"
        borderColor="purple.600"
        borderRadius="md"
        background="purple.900"
        py="2"
        px="4"
        mt="4"
      >
        <StatLabel display="flex" justifyContent="space-between">
          Sr. Pago <Badge colorScheme="yellow">processing</Badge>
        </StatLabel>
        <StatNumber>USD 3600</StatNumber>
        <StatHelpText>Feb 28</StatHelpText>
      </Stat>
      <Stat
        border="1px solid"
        borderColor="purple.600"
        borderRadius="md"
        background="purple.900"
        py="2"
        px="4"
        mt="4"
      >
        <StatLabel display="flex" justifyContent="space-between">
          Sr. Pago <Badge>Pending</Badge>
        </StatLabel>
        <StatNumber>USD 3600</StatNumber>
        <StatHelpText>Feb 28</StatHelpText>
      </Stat>
      <Text mt="2" textAlign="right">
        <Link to="/payrolls/incoming" as={RouterLink}>
          View all incoming payrolls &rarr;
        </Link>
      </Text>
      <Heading size="lg" mt="4">
        Recenlty processed payrolls
      </Heading>
      <Stat
        border="1px solid"
        borderColor="purple.600"
        borderRadius="md"
        background="purple.900"
        py="2"
        px="4"
        mt="4"
      >
        <StatLabel display="flex" justifyContent="space-between">
          Sr. Pago <Badge colorScheme="green">processed</Badge>
        </StatLabel>
        <StatNumber>USD 3600</StatNumber>
        <StatHelpText>Processed on Feb 28</StatHelpText>
      </Stat>
      <Stat
        border="1px solid"
        borderColor="purple.600"
        borderRadius="md"
        background="purple.900"
        py="2"
        px="4"
        mt="4"
      >
        <StatLabel display="flex" justifyContent="space-between">
          Sr. Pago <Badge colorScheme="green">processed</Badge>
        </StatLabel>
        <StatNumber>USD 3600</StatNumber>
        <StatHelpText>Processed on Feb 28</StatHelpText>
      </Stat>
      <Text mt="2" textAlign="right">
        <Link to="/payrolls/incoming" as={RouterLink}>
          View all recently processed payrolls &rarr;
        </Link>
      </Text>
    </>
  );
};
