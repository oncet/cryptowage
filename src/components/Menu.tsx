import React from "react";
import {
  Box,
  List,
  ListIcon,
  ListItem,
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
} from "react-icons/fa";

import { HeaderLink } from "./HeaderLink";

type HeaderProps = {
  onClick: () => void;
};

export const Menu = ({ onClick }: HeaderProps) => {
  const separatorColor = useColorModeValue("gray.300", "gray.700");

  console.log("onClick", onClick);

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
    </Box>
  );
};
