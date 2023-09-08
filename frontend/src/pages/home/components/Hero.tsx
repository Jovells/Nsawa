import { macLanding } from "@/assets";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero pt-32  -mt-40 md:-mt-60 md:mb-40 mb-10 xl:mb-60">
      <Section>
        <div className="flex flex-col items-center text-white text-center font-mono gap-2 mt-40 md:mt-60">
          <h1>Real giving transforms lives</h1>
          <h4>
            Empower your giving with transparency and impact through blockchain
            innovation.
          </h4>
          <Button className="bg-white text-[#471AA0] text-xl my-12 hover:bg-black shadow-md hover:text-white px-6">
            Start here
          </Button>
          <img src={macLanding} alt="computer" className="w-[1100px]  mt-3" />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
