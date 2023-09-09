import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'https://api.studio.thegraph.com/query/52352/nsawa/2',
    cache: new InMemoryCache(),
});