import React from "react";
import {
  chakra,
  ChakraProvider,
  Container,
  Heading,
  theme,
} from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Container maxW="container.lg" pt="4">
        <chakra.main>
          <Switch>
            <Route exact path="/">
              <Heading as="h1">Homepage</Heading>
            </Route>
            <Route path="/contracts">
              <Heading as="h1">Contracts</Heading>
            </Route>
          </Switch>
        </chakra.main>
      </Container>
    </Router>
  </ChakraProvider>
);
