import React from "react";
import {
  chakra,
  ChakraProvider,
  Container,
  extendTheme,
  // theme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Contracts } from "./pages/Contracts";
import { Footer } from "./components/Footer";

const theme = extendTheme({
  components: {
    Stat: {
      baseStyle: {
        container: {
          background: "purple.900",
          border: "1px solid",
          borderColor: "purple.600",
          borderRadius: "md",
          px: "4",
          py: "2",
        },
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Container maxW="container.lg" pt="4" pb="24">
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
      <Footer />
    </Router>
  </ChakraProvider>
);
