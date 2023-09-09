/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
// import { nsawaContract } from "@/contract";
// import { ethers } from "ethers";

const useQueryCampaigns = () => {
  const { ethereum } = useAuth();

  //   const [campaigns, setCampaigns] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalOrganisations, setTotalOrganisations] = useState(0);
  const [loading, setLoading] = useState(false);

  const campaigns = [
    {
      name: "Save the Kids",
      amountReceived: 20,
      description:
        "This donation was created on Accra NGO to support street children",
      website: "",
    },
    {
      name: "Empower Her",
      amountReceived: 100,
      description:
        "This donation was created by Girl Power Learn NGO to support the education of 500 girls in Western Ghana",
      website: "",
    },
    {
      name: "Zion Innohub",
      amountReceived: 1000,
      description:
        "This grant was created on August 24th 2023, to help SMEs improve their business acumen",
      website: "",
    },
  ];

  useEffect(() => {
    if (ethereum) {
      (async () => {
        // setLoading(true);
        // const provider = new ethers.BrowserProvider(ethereum);
        // const signer = await provider.getSigner();

        // const fetchedOrganisations = await //@ts-ignore
        // nsawaContract.connect(signer).getAmountReceived(0);
        // // const fetchedOrganisations = await //@ts-ignore
        // // nsawaContract.connect(signer).organisations(id, campaign);

        // console.log(await fetchedOrganisations);

        // const fetchedTotalOrganisations = await nsawaContract
        //   .connect(signer)
        //   //@ts-ignore
        //   .organisationCounter();

        // console.log(fetchedTotalOrganisations);

        // const formattedTotalOrganisations = Number(fetchedTotalOrganisations);

        // const fetchedTotalDonations = await nsawaContract
        //   .connect(signer)
        //   //@ts-ignore
        //   .donationCounter();

        // const formattedTotalDonations = Number(fetchedTotalDonations);

        // setCampaigns(fetchedOrganisations);
        // setTotalOrganisations(formattedTotalOrganisations);
        // setTotalDonations(formattedTotalDonations);
        // setLoading(false);

        // setCampaigns(organisations);
        setTotalOrganisations(3);
        setTotalDonations(10);
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
