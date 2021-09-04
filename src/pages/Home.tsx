import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Heading,
  Link,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

import { DaiIcon } from "../components/icons/DaiIcon";
import { EthIcon } from "../components/icons/EthIcon";

export const Home = () => {
  return (
    <>
      <Heading as="h1" mb="4">
        Dashboard
      </Heading>
      <Heading size="lg">Current distributions</Heading>
      <StatGroup as={Stack} direction="row" spacing="4" mt="4">
        <Stat>
          <StatLabel>95%</StatLabel>
          <StatNumber display="flex" alignItems="center">
            DAI
            <DaiIcon boxSize="6" ml="2" />
          </StatNumber>
          <StatHelpText>Stable coin</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>5%</StatLabel>
          <StatNumber display="flex" alignItems="center">
            ETH
            <EthIcon boxSize="6" ml="2" />
          </StatNumber>
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
      <Stack mt="4" spacing="4">
        <Stat>
          <StatLabel display="flex" justifyContent="space-between">
            Sr. Pago
            <Link
              as={RouterLink}
              to="/payroll/1"
              fontWeight="normal"
              textDecoration="none"
            >
              View details
            </Link>
          </StatLabel>
          <StatNumber>USD 3600</StatNumber>
          <StatHelpText>Feb 28</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel display="flex" justifyContent="space-between">
            Sr. Pago
            <Link
              as={RouterLink}
              to="/payroll/1"
              fontWeight="normal"
              textDecoration="none"
            >
              View details
            </Link>
          </StatLabel>
          <StatNumber>USD 3600</StatNumber>
          <StatHelpText>Feb 28</StatHelpText>
        </Stat>
      </Stack>
      <Text mt="2" textAlign="right">
        <Link to="/payrolls" as={RouterLink}>
          View all payrolls &rarr;
        </Link>
      </Text>
      <Heading size="lg" mt="4">
        Recenlty processed payrolls
      </Heading>
      <Stack mt="4" spacing="4">
        <Stat>
          <StatLabel display="flex" justifyContent="space-between">
            Sr. Pago
            <Link
              as={RouterLink}
              to="/payroll/1"
              fontWeight="normal"
              textDecoration="none"
            >
              View details
            </Link>
          </StatLabel>
          <StatNumber>USD 3600</StatNumber>
          <StatHelpText>Processed on Feb 28</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel display="flex" justifyContent="space-between">
            Sr. Pago
            <Link
              as={RouterLink}
              to="/payroll/1"
              fontWeight="normal"
              textDecoration="none"
            >
              View details
            </Link>
          </StatLabel>
          <StatNumber>USD 3600</StatNumber>
          <StatHelpText>Processed on Feb 28</StatHelpText>
        </Stat>
      </Stack>
      <Text mt="2" textAlign="right">
        <Link to="/payrolls" as={RouterLink}>
          View all payrolls &rarr;
        </Link>
      </Text>
    </>
  );
};
