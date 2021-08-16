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

export const DaiIcon = createIcon({
  displayName: "DaiIcon",
  viewBox: "0 0 444 444",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#F5AC37"
      fill-rule="nonzero"
      d="M222.22 0c122.74,0 222.22,99.5 222.22,222.22 0,122.74 -99.48,222.22 -222.22,222.22 -122.72,0 -222.22,-99.49 -222.22,-222.22 0,-122.72 99.5,-222.22 222.22,-222.22z"
    />,
    <path
      fill="#FEFEFD"
      fill-rule="nonzero"
      d="M230.41 237.91l84.44 0c1.8,0 2.65,0 2.78,-2.36 0.69,-8.59 0.69,-17.23 0,-25.83 0,-1.67 -0.83,-2.36 -2.64,-2.36l-168.05 0c-2.08,0 -2.64,0.69 -2.64,2.64l0 24.72c0,3.19 0,3.19 3.33,3.19l82.78 0zm77.79 -59.44c0.24,-0.63 0.24,-1.32 0,-1.94 -1.41,-3.07 -3.08,-6 -5.02,-8.75 -2.92,-4.7 -6.36,-9.03 -10.28,-12.92 -1.85,-2.35 -3.99,-4.46 -6.39,-6.25 -12.02,-10.23 -26.31,-17.47 -41.67,-21.11 -7.75,-1.74 -15.67,-2.57 -23.61,-2.5l-74.58 0c-2.08,0 -2.36,0.83 -2.36,2.64l0 49.3c0,2.08 0,2.64 2.64,2.64l160.27 0c0,0 1.39,-0.28 1.67,-1.11l-0.68 0zm0 88.33c-2.36,-0.26 -4.74,-0.26 -7.1,0l-154.02 0c-2.08,0 -2.78,0 -2.78,2.78l0 48.2c0,2.22 0,2.78 2.78,2.78l71.11 0c3.4,0.26 6.8,0.02 10.13,-0.69 10.32,-0.74 20.47,-2.98 30.15,-6.67 3.52,-1.22 6.92,-2.81 10.13,-4.72l0.97 0c16.67,-8.67 30.21,-22.29 38.75,-39.01 0,0 0.97,-2.1 -0.12,-2.65zm-191.81 78.75l0 -0.83 0 -32.36 0 -10.97 0 -32.64c0,-1.81 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -26.39 32.22 0c1.8,0 2.5,0 2.5,-2.36l0 -26.11c0,-1.67 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -24.44c0,-1.53 0,-1.94 2.22,-1.94l29.86 0c2.08,0 2.64,0 2.64,-2.64l0 -74.86c0,-2.22 0,-2.78 2.78,-2.78l104.16 0c7.56,0.3 15.07,1.13 22.5,2.5 15.31,2.83 30.02,8.3 43.47,16.11 8.92,5.25 17.13,11.59 24.44,18.89 5.5,5.71 10.46,11.89 14.86,18.47 4.37,6.67 8,13.8 10.85,21.25 0.35,1.94 2.21,3.25 4.15,2.92l24.86 0c3.19,0 3.19,0 3.33,3.06l0 22.78c0,2.22 -0.83,2.78 -3.06,2.78l-19.17 0c-1.94,0 -2.5,0 -2.36,2.5 0.76,8.46 0.76,16.95 0,25.41 0,2.36 0,2.64 2.65,2.64l21.93 0c0.97,1.25 0,2.5 0,3.76 0.14,1.61 0.14,3.24 0,4.85l0 16.81c0,2.36 -0.69,3.06 -2.78,3.06l-26.25 0c-1.83,-0.35 -3.61,0.82 -4.03,2.64 -6.25,16.25 -16.25,30.82 -29.17,42.5 -4.72,4.25 -9.68,8.25 -14.86,11.94 -5.56,3.2 -10.97,6.53 -16.67,9.17 -10.49,4.72 -21.49,8.2 -32.78,10.41 -10.72,1.92 -21.59,2.79 -32.5,2.64l-96.39 0 0 -0.14z"
    />,
  ],
});

export const USDCIcon = createIcon({
  displayName: "USDCIcon",
  viewBox: "0 0 2000 2000",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"
      fill="#2775ca"
    />,
    <path
      d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"
      fill="#fff"
    />,
    <path
      d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"
      fill="#fff"
    />,
  ],
});

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
        <USDCIcon boxSize="30" mr="2" /> 10% USDC
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
