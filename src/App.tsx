import React from "react";
import { chakra, ChakraProvider, Container, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Contracts } from "./pages/Contracts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Container maxW="container.lg" pt="4">
        <chakra.main mt="14">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contracts">
              <Contracts />
            </Route>
          </Switch>
        </chakra.main>
      </Container>
    </Router>
  </ChakraProvider>
);
