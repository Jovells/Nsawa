import Section from "@/components/layouts/Section";
import Wallets from "./components/Wallets";

const Wallet = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row py-40 items-center md:justify-between">
        <div className="md:w-3/4">
          <h3 className="text-[#471AA0]">Connect your Wallet</h3>
          <h2>Connecting your wallet is like logging in to Web 3</h2>
          <h4 className="text-[#737373]">
            Select your wallet from the options to get started
          </h4>
        </div>
        <Wallets />
      </div>
    </Section>
  );
};

export default Wallet;
