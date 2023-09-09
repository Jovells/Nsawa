import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { client } from '@/graphql';

const Campaigns = () => {
  return <div>Campaigns</div>;
};

export default Campaigns;

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));
