import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  List,
  ListIcon,
  ListItem,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaHome,
  FaFileContract,
  FaSitemap,
  FaUserCircle,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaCog,
  FaMoon,
} from "react-icons/fa";

import { HeaderLink } from "./HeaderLink";

type HeaderProps = {
  onClick: () => void;
};

export const Menu = ({ onClick }: HeaderProps) => {
  const { toggleColorMode } = useColorMode();
  const isDarkModeEnabled = useColorModeValue(false, true);
  const separatorColor = useColorModeValue("gray.300", "gray.700");

  return (
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
      <List borderTop="1px solid" borderColor={separatorColor}>
        <ListItem
          key="dark-mode"
          display="flex"
          alignItems="center"
          px={1}
          py={2}
        >
          <ListIcon as={FaMoon} />
          <FormControl display="inline-flex" alignItems="center">
            <FormLabel htmlFor="dark-mode" fontWeight="normal" mb="0">
              Dark mode
            </FormLabel>
            <Switch
              id="dark-mode"
              display="flex"
              alignItems="center"
              onChange={toggleColorMode}
              isChecked={isDarkModeEnabled}
            />
          </FormControl>
        </ListItem>
      </List>
    </Box>
  );
};
