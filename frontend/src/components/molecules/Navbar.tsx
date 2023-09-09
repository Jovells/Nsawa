import { logo } from "@/assets";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { Web3Button } from "@web3modal/react";
import { NetworkSwitch } from "../ui/network-switch";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 bg-[#471AA0] z-40 ">
      <Section>
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:scale-110 hover:text-white/90">
            <img src={logo} alt="log" className="w-36" />
          </Link>

          <div className="flex gap-8 items-center">
            <div className="hidden lg:flex flex-row md:gap-10 text-white cursor-pointer items-center">
              <Link to="/" className="hover:scale-110 hover:text-white/90">
                Home
              </Link>
              <Link
                to="/campaigns"
                // state={{ from: { pathname: "/campaigns" } }}
                className="hover:scale-110 hover:text-white/90"
              >
                View campaigns
              </Link>
            </div>
            <NetworkSwitch />
            <Web3Button />

            <SideBar />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Navbar;
