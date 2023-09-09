/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { nsawaContract } from "@/contract";
import { ethers } from "ethers";

const useQueryCampaigns = () => {
  const { ethereum } = useAuth();

  const [campaigns, setCampaigns] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalOrganisations, setTotalOrganisations] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ethereum) {
      (async () => {
        setLoading(true);
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();

        const fetchedOrganisations = await //@ts-ignore
        nsawaContract.connect(signer).getAmountReceived(0);
        // const fetchedOrganisations = await //@ts-ignore
        // nsawaContract.connect(signer).organisations(id, campaign);

        console.log(await fetchedOrganisations);

        const fetchedTotalOrganisations = await nsawaContract
          .connect(signer)
          //@ts-ignore
          .organisationCounter();

        console.log(fetchedTotalOrganisations);

        const formattedTotalOrganisations = Number(fetchedTotalOrganisations);

        const fetchedTotalDonations = await nsawaContract
          .connect(signer)
          //@ts-ignore
          .donationCounter();

        const formattedTotalDonations = Number(fetchedTotalDonations);

        setCampaigns(fetchedOrganisations);
        setTotalOrganisations(formattedTotalOrganisations);
        setTotalDonations(formattedTotalDonations);
        setLoading(false);
      })();
    }
  }, [ethereum]);

  return {
    campaigns,
    totalDonations,
    totalOrganisations,
    loading,
  };
};

export default useQueryCampaigns;
