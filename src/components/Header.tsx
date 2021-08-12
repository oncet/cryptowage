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
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const background = useColorModeValue("gray.200", "gray.900");
  const separatorColor = useColorModeValue("gray.300", "gray.700");

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  });

  const onClick = () => setIsOpen(false);

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
          <Link to="/" as={RouterLink} onClick={onClick}>
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
        <Collapse in={isOpen} animateOpacity>
          <Box pt={2}>
            <List>
              <ListItem key="home">
                <HeaderLink to="/" onClick={onClick}>
                  <ListIcon as={FaHome} />
                  Home
                </HeaderLink>
              </ListItem>
              <ListItem key="profile">
                <HeaderLink to="/profile" onClick={onClick}>
                  <ListIcon as={FaUserCircle} />
                  Profile
                </HeaderLink>
              </ListItem>
              <ListItem key="settings">
                <HeaderLink to="/settings" onClick={onClick}>
                  <ListIcon as={FaCog} />
                  Settings
                </HeaderLink>
              </ListItem>
            </List>
            <List borderTop="1px solid" borderColor={separatorColor}>
              <ListItem key="payrolls">
                <HeaderLink to="/payrolls" onClick={onClick}>
                  <ListIcon as={FaMoneyBillWave} />
                  Payrolls
                </HeaderLink>
              </ListItem>
              <ListItem key="distributions">
                <HeaderLink to="/distributions" onClick={onClick}>
                  <ListIcon as={FaSitemap} />
                  Distributions
                </HeaderLink>
              </ListItem>
              <ListItem key="contracts">
                <HeaderLink to="/contracts" onClick={onClick}>
                  <ListIcon as={FaFileContract} />
                  Contracts
                </HeaderLink>
              </ListItem>
            </List>
            <List borderTop="1px solid" borderColor={separatorColor}>
              <ListItem key="help">
                <HeaderLink to="/help" onClick={onClick}>
                  <ListIcon as={FaQuestionCircle} />
                  Help
                </HeaderLink>
              </ListItem>
            </List>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
