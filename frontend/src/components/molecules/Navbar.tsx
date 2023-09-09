import { logo } from "@/assets";
import Section from "../layouts/Section";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import SideBar from "./SideBar";

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
            <div className="hidden lg:flex flex-row md:gap-10 text-white cursor-pointer items-center">
              <Link to="/" className="hover:scale-110 hover:text-white/90">
                Home
              </Link>
              <Link
                to="/auth"
                state={{ from: { pathname: "/campaigns" } }}
                className="hover:scale-110 hover:text-white/90"
              >
                View campaigns
              </Link>
            </div>
            <Button
              className="bg-white text-[#471AA0] px-6 hover:bg-black shadow-md hover:text-white font-bold"
              onClick={() => navigate("/start-here")}
            >
              Create a campaign
            </Button>
            <SideBar />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Navbar;
