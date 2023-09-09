import { macLanding } from "@/assets";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero pt-32  -mt-40 md:-mt-60 md:mb-40 mb-10 xl:mb-60">
      <Section>
        <div className="flex flex-col items-center text-white text-center font-mono gap-2 mt-40 md:mt-60">
          <h1>Real giving transforms lives</h1>
          <h4>
            Empower your giving with transparency and impact through blockchain
            innovation.
          </h4>
          <div className="flex gap-5">
            <Button
              className="bg-white text-[#471AA0] text-3xl my-12 hover:bg-black shadow-md hover:text-white px-6 py-6 font-bold"
              onClick={() =>
                navigate("/campaigns", {
                  state: { from: { pathname: "/campaigns" } },
                })
              }
            >
              Donate Now
            </Button>
            <Button
              className="bg-[#ADFF2F] text-[#471AA0] text-3xl my-12 hover:bg-black shadow-md hover:text-white px-6 py-6 font-bold"
              onClick={() => navigate("/start-here")}
            >
              Create a campaign
            </Button>
          </div>
          <img src={macLanding} alt="computer" className="w-[1100px]  mt-3" />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
