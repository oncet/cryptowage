import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, chakra, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaUserCircle, FaMoneyBillAlt } from "react-icons/fa";

export const Footer = () => {
  const background = useColorModeValue("gray.200", "gray.900");

  return (
    <Box
      transition="background 0.1s"
      background={background}
      py="2"
      position="fixed"
      width="100%"
      zIndex="sticky"
      bottom="0"
    >
      <Box maxW="container.lg" margin="auto">
        <chakra.footer
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <IconButton
            as={RouterLink}
            to="/payrolls"
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            aria-label="Menu button"
            icon={<FaMoneyBillAlt />}
          />
          <IconButton
            as={RouterLink}
            to="/"
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            aria-label="Menu button"
            icon={<FaHome />}
          />
          <IconButton
            as={RouterLink}
            to="/profile"
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            aria-label="Menu button"
            icon={<FaUserCircle />}
          />
        </chakra.footer>
      </Box>
    </Box>
  );
};
