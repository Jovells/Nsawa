import { logoBlack } from "@/assets";
import Section from "../layouts/Section";
import Social from "./Social";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#252B42] py-32 flex flex-col items-center text-center z-10 ">
        <h2 className="font-mono text-white  ">
          Every donation makes an impact
        </h2>
        <h3 className="text-[#BDBDBD] font-semibold ">
          For Charities and Grant donor organizations
        </h3>
        <div className="flex gap-5 mt-10">
          <Button className="bg-[#471AA0] px-6 hover:bg-black shadow-md">
            Donate now
          </Button>
          <Button className="bg-[#252B42] border px-6 hover:bg-black shadow-md ">
            Register for free
          </Button>
        </div>
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
