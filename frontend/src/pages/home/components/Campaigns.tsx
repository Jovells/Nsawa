/* eslint-disable @typescript-eslint/ban-ts-comment */
import Section from "@/components/layouts/Section";
import Campaign from "@/pages/campaigns/components/Campaigns";
import useQueryCampaigns from "@/pages/campaigns/hooks/useQueryCampaigns";

const NsawaCampaigns = () => {
  const { campaigns } = useQueryCampaigns();
  return (
    <Section>
      <div className="md:mb-40 mx-10 mb-20 flex-col justify-center">
        <h2 className="text-center"># Nsawa Campaigns</h2>
        {/* @ts-ignore */}
        <Campaign campaigns={campaigns} />
      </div>
    </Section>
  );
};

export default NsawaCampaigns;
