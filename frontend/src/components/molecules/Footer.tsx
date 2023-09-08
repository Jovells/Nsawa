import { logoBlack } from "@/assets";
import Section from "../layouts/Section";
import Social from "./Social";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#252B42]  ">
        <Section>
          <div className="py-32 flex flex-col items-center text-center z-10">
            <h2 className="font-mono text-white  ">
              Stay updated with news in the ecosystem
            </h2>

            <div className="flex flex-col items-center gap-5 mt-10 ">
              <h3 className="text-[#BDBDBD] font-semibold ">
                Subscribe to our Newsletter{" "}
              </h3>
              <Button className="text-[#471AA0] bg-white px-6 hover:bg-black hover:text-white shadow-md lg:w-2/5 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
          <img src={logoBlack} alt="logo" className="w-36" />
          <Social />
        </div>
      </Section>
    </div>
  );
};

export default Footer;
