import React, { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  chakra,
  Collapse,
  IconButton,
  Image,
  Link,
  Portal,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { Menu } from "./Menu";
import logo from "../logo.svg";

const AnimatedBox = motion(Box);

export const Header = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const background = useColorModeValue("gray.200", "gray.900");

  const onClick = () => {
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
          <Link to="/" as={RouterLink} onClick={onClick} borderRadius="xl">
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
        <AnimatePresence>
          {isOpen && (
            <Portal>
              <AnimatedBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{
                  duration: 0.1,
                }}
                exit={{ opacity: 0 }}
                position="absolute"
                top="0"
                bottom="0"
                left="0"
                right="0"
                background="black"
                onClick={onClick}
              />
            </Portal>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};
