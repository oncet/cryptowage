import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Badge,
  Heading,
  Link,
  Stat,
  StatGroup,
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
      <Heading size="lg">Current distributions</Heading>
      <StatGroup>
        <Stat
          border="1px solid"
          borderColor="purple.600"
          borderRadius="md"
          background="purple.900"
          py="2"
          px="4"
          mt="4"
          mr="2"
        >
          <StatLabel>95%</StatLabel>
          <StatNumber>DAI</StatNumber>
          <StatHelpText>Stable coin</StatHelpText>
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
          <StatLabel>5%</StatLabel>
          <StatNumber>ETH</StatNumber>
          <StatHelpText>Cryptocurrency</StatHelpText>
        </Stat>
      </StatGroup>
      <Text mt="2" textAlign="right">
        <Link to="/distributions" as={RouterLink}>
          Edit distributions &rarr;
        </Link>
      </Text>
      <Heading size="lg" mt="4">
        Incoming payrolls
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
        <Link to="/payrolls" as={RouterLink}>
          View all payrolls &rarr;
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
        variant="default"
        colorScheme="brand"
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
        <Link to="/payrolls" as={RouterLink}>
          View all payrolls &rarr;
        </Link>
      </Text>
    </>
  );
};
