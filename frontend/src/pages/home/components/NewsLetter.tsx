import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";

const NewsLetter = () => {
  return (
    <Section>
      <div className="flex-col gap-8 items-center md:mb-40  mb-20 text-center">
        <h2>Newsletter</h2>
        <h4 className="text-[#737373]">Get the latest news on donations</h4>
        <div className="flex flex-col my-12 gap-6 items-center">
          <input
            placeholder="Your email"
            type="text"
            className="rounded-md w-full md:w-3/5 "
          />
          <Button className="px-6 bg-[#471AA0] hover:bg-black shadow-md flex w-full md:w-3/5  ">
            Subscribe
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default NewsLetter;
