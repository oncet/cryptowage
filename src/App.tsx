import React from "react";
import {
  chakra,
  ChakraProvider,
  Container,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Switch, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Contracts } from "./pages/Contracts";
import { Payroll } from "./pages/Payroll";

const theme = extendTheme({
  components: {
    Stat: {
      baseStyle: (props) => ({
        container: {
          background: mode("gray.100", "purple.900")(props),
          border: "1px solid",
          borderColor: mode("gray.300", "purple.600")(props),
          borderRadius: "md",
          px: "4",
          py: "2",
        },
      }),
    },
    Link: {
      baseStyle: (props) => ({
        textDecoration: "underline",
        color: mode("blue.600", "blue.300")(props),
      }),
    },
  },
});

export const App = () => {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.lg" pt="4" pb="24">
        <chakra.main
          as={motion.main}
          key={location.pathname}
          mt="14"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/payroll/:id">
              <Payroll />
            </Route>
            <Route path="/contracts">
              <Contracts />
            </Route>
          </Switch>
        </chakra.main>
      </Container>
      <Footer />
    </ChakraProvider>
  );
};
