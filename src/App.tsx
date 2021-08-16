import React from "react";
import { chakra, ChakraProvider, Container } from "@chakra-ui/react";
import { Switch, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { theme } from "./theme";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Contracts } from "./pages/Contracts";
import { Payroll } from "./pages/Payroll";

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
