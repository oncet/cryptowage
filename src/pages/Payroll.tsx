import React from "react";
import {
  chakra,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  FaBroadcastTower,
  FaCalendarCheck,
  FaCheck,
  FaClock,
} from "react-icons/fa";

export const Payroll = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      {/* <Flex alignItems="center" justify="space-between">
        <Heading as="h1" size="md" mb="2">
          {`Payroll #${id}`}
        </Heading>
        <Badge colorScheme="yellow">processing</Badge>
      </Flex> */}
      <Breadcrumb mb="2">
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Payrolls</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Payroll #{id}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h1">USD 3600</Heading>
      <Text mb="4">From Sr. Pago</Text>
      <List spacing="2" mb="4">
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCalendarCheck} />
          Created on Feb 28 at 11:57 AM
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCalendarCheck} />
          Broadcasted on Feb 29 at 12:55 AM
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCalendarCheck} />
          Fulfilled on Feb 30 at 04:09 PM
        </ListItem>
      </List>
      <Text mb="4">USD 10 fee for incoming wire.</Text>
      <chakra.hr mb="4" />
      {/* <Heading as="h2" size="md">
        Distribution
      </Heading> */}
    </>
  );
};
