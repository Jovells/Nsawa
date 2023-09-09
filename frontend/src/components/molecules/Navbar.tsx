import { logo } from "@/assets";
import K from "@/constants";
import Section from "../layouts/Section";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import W3Button from "../ui/web3button";

import SideBar from "./SideBar";
import { NetworkSwitch } from "../ui/network-switch";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 bg-[#471AA0] z-40 ">
      <Section>
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="log" className="w-36" />
          </div>
          <div className="flex gap-8 items-center">
            <div className="hidden lg:flex flex-row md:gap-10 text-white cursor-pointer">
              {K.NAVLINKS.map((item) => (
                <Link
                  to={item.link}
                  className="hover:scale-110 hover:text-white/90"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <NetworkSwitch />
            <W3Button />
            <Button
              className="bg-white text-[#471AA0] px-6 hover:bg-black shadow-md hover:text-white font-bold"
              onClick={() => navigate("/start-here")}
            >
              Sign up as Organization
            </Button>
            <SideBar />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Navbar;
