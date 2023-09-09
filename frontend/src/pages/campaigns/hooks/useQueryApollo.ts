/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { gql } from "@apollo/client";
import { useApolloClient } from "@/context/ApolloContext";

const useQueryCampaigns = () => {
  const { ethereum } = useAuth();
  const apolloClient = useApolloClient();

  const [campaigns, setCampaigns] = useState([]);
  const [totalOrganisations, setTotalOrganisations] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ethereum) {
      (async () => {
        setLoading(true);

        const res = await apolloClient?.query({
          query: gql`
            query addedOrganisations {
              id
              name
              description
            }
          `,
        });
        //@ts-ignore
        const fetchedOrganisations = res?.addedOrganisations;

        console.log(fetchedOrganisations);

        setCampaigns(fetchedOrganisations);
        setTotalOrganisations(fetchedOrganisations.length);
        setLoading(false);
      })();
    }
  }, [ethereum]);

  return {
    campaigns,

    totalOrganisations,
    loading,
  };
};

export default useQueryCampaigns;
