import React, { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  chakra,
  Collapse,
  IconButton,
  Image,
  Link,
  useColorModeValue,
  useOutsideClick,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Menu } from "./Menu";
import logo from "../logo.svg";

export const Header = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const background = useColorModeValue("gray.200", "gray.900");

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  });

  const onClick = () => {
    console.log("click!");
    setIsOpen(false);
  };

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
          <Menu onClick={onClick} />
        </Collapse>
      </Box>
    </Box>
  );
};
