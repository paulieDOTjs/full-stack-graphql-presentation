import { ApolloClient, HttpLink, from } from "@apollo/client";
import { GRAPHQL_URL } from "../utils/config/GRAPHQL_URL";
import { cache } from "./cache/cache";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

const getUri = (operationName?: string) => {
  const opVar = operationName ? `?operationName=${operationName}` : "";
  return GRAPHQL_URL + opVar;
};

export const client = (function () {
  const errorLink = onError((error) => {
    if (error.graphQLErrors)
      error.graphQLErrors.forEach(({ message, locations, path }) =>
        console.error("[GraphQL error]:", { message, locations, path })
      );
    else if (error.networkError)
      console.error(`[Network error]: ${error.networkError}`);
    else console.error(error);
  });

  const operationNameLink = setContext((request) => {
    const uri = getUri(request.operationName);
    return { uri };
  });

  const httpLink = new HttpLink();

  return new ApolloClient({
    cache,
    link: from([errorLink, operationNameLink, httpLink]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-first",
        nextFetchPolicy: "cache-first",
        errorPolicy: "all",
      },
    },
  });
})();
