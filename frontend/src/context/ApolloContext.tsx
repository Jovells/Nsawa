import { createContext, ReactNode, useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const ApolloContext = createContext<ApolloClient<NormalizedCacheObject> | null>(
  null,
);

const apolloClient = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/52357/nsawa-graph/v0.0.1",
  cache: new InMemoryCache(),
});

export const ApolloContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ApolloContext.Provider value={apolloClient}>
      {children}
    </ApolloContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApolloClient = () => useContext(ApolloContext);
