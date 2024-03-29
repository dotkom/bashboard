import React from "react";
import { AppProps } from "next/app";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider, OnlineTheme, extendTheme } from "@dotkomonline/yacl";
import { Provider } from "next-auth/client";

const theme = extendTheme(
  {
    styles: {
      global: {
        "html, body": {
          fontSize: "sm",
          bg: "gray.200",
        },
      },
    },
  },
  OnlineTheme,
);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  const queryClient = new QueryClient();
  return (
    <Provider
      options={{ clientMaxAge: 0, keepAlive: 0 }}
      session={pageProps.session}
    >
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
