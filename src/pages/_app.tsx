import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React from "react";
import { PaginatedPosts, PostsQuery } from "../generated/graphql";
import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
export default MyApp;
