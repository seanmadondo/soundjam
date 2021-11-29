import React, { useEffect } from "react";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import {
  ThemeProvider as MuiThemeProvider,
  Container,
} from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";
import theme from "./Styles/theme";

import { NavigationBar } from "./components/NavigationBar";
import { Board } from "./components/Board";
import { useRootStore } from "./stores/RootStateContext";
import { observer } from "mobx-react-lite";

//========================================================================================
//Apollo Client setup for API
const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api",
      headers: {
        Authorization: "5152fa08-1806-4514-9f66-730e9b59486e",
        "Content-Type": "application/json",
      },
    }),
    cache: new InMemoryCache(),
  });
};
//========================================================================================

const App = observer(() => {
  const client = createApolloClient();
  const ticketStore = useRootStore();

  useEffect(() => {
    ticketStore.ticketStore.getMoves();
  }, [ticketStore]);

  const moves = ticketStore.ticketStore.getMoves();

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <NavigationBar moves={moves} />
            <Board />
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  );
});

export default App;
