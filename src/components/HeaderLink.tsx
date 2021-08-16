import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

type HeaderLinkProps = {
  to: string;
  onClick: () => void;
};

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  to,
  onClick,
  children,
}) => {
  return (
    <Link
      as={RouterLink}
      onClick={onClick}
      alignItems="center"
      display="flex"
      px={1}
      py={2}
      to={to}
      variant="menu"
    >
      {children}
    </Link>
  );
};
