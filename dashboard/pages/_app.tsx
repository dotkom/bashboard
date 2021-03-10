import React from "react";
import { AppProps } from "next/app";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider, OnlineTheme } from "@dotkomonline/yacl";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    const queryClient = new QueryClient();
    return (
        <ThemeProvider theme={OnlineTheme}>
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Component {...pageProps} />
                    </Hydrate>
                </QueryClientProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default MyApp;
