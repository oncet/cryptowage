import React from "react";
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
  Slide,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaBars,
  FaHome,
  FaFileContract,
  FaSitemap,
  FaUserCircle,
} from "react-icons/fa";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import logo from "../logo.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const background = useColorModeValue("gray.200", "gray.900");

  const routes = [
    { to: "/", text: "Home", icon: FaHome },
    { to: "/profile", text: "Profile", icon: FaUserCircle },
    { to: "/contracts", text: "Contracts", icon: FaFileContract },
    { to: "/distributions", text: "Distributions", icon: FaSitemap },
  ];

  return (
    <Box
      transition="background 0.25s"
      background={isOpen ? background : ""}
      px="4"
      py="2"
    >
      <Box maxW="container.lg" margin="auto">
        <chakra.header
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          // border="1px solid"
        >
          <Image src={logo} alt="Logo" />
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
          // transition={{ enter: { duration: 5 } }}
        >
          <Box pt={2}>
            <List>
              {routes.map(({ to, text, icon }) => (
                <ListItem>
                  <Link
                    to={to}
                    as={RouterLink}
                    display="flex"
                    alignItems="center"
                    // border="1px solid"
                    px={1}
                    py={2}
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
