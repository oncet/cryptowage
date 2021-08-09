import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  chakra,
  Collapse,
  IconButton,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
  useOutsideClick,
} from "@chakra-ui/react";
import {
  FaBars,
  FaHome,
  FaFileContract,
  FaSitemap,
  FaUserCircle,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaCog,
} from "react-icons/fa";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import logo from "../logo.svg";
import { useState } from "react";

export const Header = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const background = useColorModeValue("gray.200", "gray.900");
  // const shadow = useColorModeValue("md", "");

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  });

  const routes = [
    { id: "home", to: "/", text: "Home", icon: FaHome },
    { id: "profile", to: "/profile", text: "Profile", icon: FaUserCircle },
    { id: "settings", to: "/settings", text: "Settings", icon: FaCog },
    {
      id: "payrolls",
      to: "/payrolls",
      text: "Payrolls",
      icon: FaMoneyBillWave,
    },
    {
      id: "distributions",
      to: "/distributions",
      text: "Distributions",
      icon: FaSitemap,
    },
    {
      id: "contracts",
      to: "/contracts",
      text: "Contracts",
      icon: FaFileContract,
    },
    { id: "help", to: "/help", text: "Help", icon: FaQuestionCircle },
  ];

  return (
    <Box
      transition="background 0.1s"
      background={background}
      px="4"
      py="2"
      position="fixed"
      width="100%"
      zIndex="sticky"
    >
      <Box maxW="container.lg" margin="auto" ref={ref}>
        <chakra.header
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/" as={RouterLink}>
            <Image src={logo} alt="Logo" />
          </Link>
          <ColorModeSwitcher />
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            aria-label="Menu button"
            icon={<FaBars />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </chakra.header>
        <Collapse
          in={isOpen}
          animateOpacity
          // transition={{ enter: { duration: 5 }, exit: { duration: 5 } }}
        >
          <Box pt={2}>
            <List>
              {routes.map(({ id, to, text, icon }) => (
                <ListItem key={id}>
                  <Link
                    to={to}
                    as={RouterLink}
                    display="flex"
                    alignItems="center"
                    px={1}
                    py={2}
                    onClick={() => setIsOpen(false)}
                  >
                    <ListIcon as={icon} />
                    {text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
