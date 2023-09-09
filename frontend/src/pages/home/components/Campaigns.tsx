/* eslint-disable @typescript-eslint/ban-ts-comment */
import Section from "@/components/layouts/Section";
import Campaign from "@/pages/campaigns/components/Campaigns";
import useQueryCampaigns from "@/pages/campaigns/hooks/useQueryCampaigns";
import { Link } from "react-router-dom";

const NsawaCampaigns = () => {
  const { campaigns } = useQueryCampaigns();
  return (
    <Section>
      <div className="md:mb-40 mx-10 mb-20 flex-col justify-center">
        <Link to="/campaigns">
          <h2 className="md:text-center text-[#471AA0] cursor-pointer ">
            # Nsawa Campaigns
          </h2>
        </Link>

        {/* @ts-ignore */}
        <Campaign campaigns={campaigns} />
      </div>
    </Section>
  );
};

export default NsawaCampaigns;
