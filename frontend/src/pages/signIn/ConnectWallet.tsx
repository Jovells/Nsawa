import Section from "@/components/layouts/Section";
import Wallets from "./components/Wallets";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <div className="flex flex-col md:flex-row py-28 md:py-40 items-center md:justify-between gap-8">
        <div className="md:w-3/4 text-center md:text-left">
          <h3 className="text-[#471AA0]">Connect your Wallet</h3>
          <h2>Connecting your wallet is like logging in to Web 3</h2>
          <h4 className="text-[#737373]">
            Select your wallet from the options to get started
          </h4>
        </div>
        <div className="flex flex-col gap-10">
          <Wallets />
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p>Dont'have a wallet?</p>
            <Button className="bg-black text-white rounded-md">Sign up</Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p>Why don't I see my wallet?</p>
            <a href="" className="text-[#471AA0]">
              Learn more
            </a>
          </div>
          <Button
            onClick={() => navigate("/create-multisig-account")}
            className="bg-[#471AA0] shadow-md"
          >
            Next
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Wallet;
