/* eslint-disable @typescript-eslint/ban-ts-comment */
import { avatar } from "@/assets";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";

const Campaign = ({ campaigns }: { campaigns: [] }) => {
  return (
    <Section>
      <div className="flex flex-wrap justify-center gap-16  my-12">
        {campaigns.map((campaign, index) => (
          <div
            className="flex flex-col shadow-xl w-[300px] h-[400px] rounded-xl"
            key={index}
          >
            <img src={avatar} alt="image" />

            <div className="p-8">
              {/* @ts-ignore */}
              <p className="text-xl font-bold mb-3">{campaign.name}</p>
              {/* @ts-ignore */}
              <p className="h-[120px]">{campaign.description}</p>
              {/* @ts-ignore */}
              <p className="font-bold">GHS {campaign.amountReceived}</p>

              <Button className="w-full bg-[#471AA0] my-4">Donate</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Campaign;
