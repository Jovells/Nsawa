import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Web3Button } from "@web3modal/react";
import { useNavigate } from "react-router-dom";
import { useAccount, useContract } from 'wagmi'


const Landing = () => {
  const navigate = useNavigate();
  const { ethereum } = useAuth()
  const { address } = useAccount();
  console.log("addreee", address)

  return (
    <Section>
      <div className="w-full flex flex-col items-center justify-center py-28 md:py-40 text-center">
        <h1>Ready to Amplify your Impact?</h1>
        {address ? <Button
          className="text-white bg-[#471AA0] text-xl my-12 hover:bg-black shadow-md hover:text-white px-6"
          onClick={() => navigate("/set-up-org")}
        >
          Start here
        </Button> : <Web3Button />}
      </div>
    </Section>
  );
};

export default Landing;
