import React from "react";
import {
  chakra,
  ChakraProvider,
  Container,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Container maxW="container.lg" pt="4">
        <chakra.main mt="14">
          <Switch>
            <Route exact path="/">
              <Heading as="h1" mb="4">
                Homepage
              </Heading>
              <Text mb="4">
                Dolore veniam cillum id magna temTexor. Dolor officia aliquip et
                in cillum. Quis incididunt occaecat aliquip cillum proident
                eiusmod Lorem irure reprehenderit.
              </Text>
              <Text mb="4">
                Dolore veniam cillum id magna temTexor. Dolor officia aliquip et
                in cillum. Quis incididunt occaecat aliquip cillum proident
                eiusmod Lorem irure reprehenderit.
              </Text>
              <Text mb="4">
                Dolore veniam cillum id magna temTexor. Dolor officia aliquip et
                in cillum. Quis incididunt occaecat aliquip cillum proident
                eiusmod Lorem irure reprehenderit.
              </Text>
              <Text mb="4">
                Dolore veniam cillum id magna temTexor. Dolor officia aliquip et
                in cillum. Quis incididunt occaecat aliquip cillum proident
                eiusmod Lorem irure reprehenderit.
              </Text>
              <Text mb="4">
                Dolore veniam cillum id magna temTexor. Dolor officia aliquip et
                in cillum. Quis incididunt occaecat aliquip cillum proident
                eiusmod Lorem irure reprehenderit.
              </Text>
              <Text>
                Dolore veniam cillum id magna temTexor. Dolor officia aliquip et
                in cillum. Quis incididunt occaecat aliquip cillum proident
                eiusmod Lorem irure reprehenderit.
              </Text>
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
