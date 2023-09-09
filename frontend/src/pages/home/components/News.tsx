import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <Section>
      <div className="flex flex-col   md:mb-40  mb-20 text-center md:text-left">
        <h3 className="text-[#471AA0]">DONATION IN AFRICA</h3>
        <h2>The Ghana ecosystem report</h2>
        <div className="flex flex-col  my-4 gap-4 ">
          <h4 className="text-[#737373] md:w-3/5">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
          <Button className="bg-[#471AA0] text-white md:w-2/5">
            Read more
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default News;
