import React from "react";
import {
  createIcon,
  chakra,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarCheck,
  FaDollarSign,
  FaExternalLinkAlt,
  FaHashtag,
} from "react-icons/fa";
import { DaiIcon } from "../components/icons/DaiIcon";
import { UsdcIcon } from "../components/icons/UsdcCoin";

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
      <Heading as="h2" size="lg" mb="2" display="flex" alignItems="center">
        <DaiIcon boxSize="30" mr="2" /> 90% DAI
      </Heading>
      <List spacing="2" mb="4">
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaArrowRight} />
          Input: USD 3231
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaDollarSign} />
          Network fee: USD 69.62
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaArrowLeft} />
          Output: DAI 3161.38
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaHashtag} />
          <Text>
            Transaction ID:{" "}
            <Link isExternal href="#" display="inline-flex" alignItems="center">
              0x139d...94f6
              <Icon as={FaExternalLinkAlt} ml="2" color="gray.500" />
            </Link>
          </Text>
        </ListItem>
      </List>
      <Heading as="h2" size="lg" mb="2" display="flex" alignItems="center">
        <UsdcIcon boxSize="30" mr="2" /> 10% USDC
      </Heading>
      <List spacing="2">
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaArrowRight} />
          Input: USD 3231
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaDollarSign} />
          Network fee: USD 69.62
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaArrowLeft} />
          Output: DAI 3161.38
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaHashtag} />
          <Text>
            Transaction ID:{" "}
            <Link isExternal href="#" display="inline-flex" alignItems="center">
              0x139d...94f6
              <Icon as={FaExternalLinkAlt} ml="2" color="gray.500" />
            </Link>
          </Text>
        </ListItem>
      </List>
    </>
  );
};
