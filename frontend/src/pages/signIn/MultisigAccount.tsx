import Section from "@/components/layouts/Section";
import MultiSignForm from "./components/MultiSignForm";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { useAccount } from 'wagmi'

interface MultisigAccProps {
  cosigner: string
  setCosigner: Dispatch<SetStateAction<string>>
  completeSetup: () => void
}
const MultisigAccount = ({ cosigner, setCosigner, completeSetup }: MultisigAccProps) => {

  return (
    <Section>
      <div className="flex flex-col items-center py-28 md:py-40 text-center">
        <h3 className="text-[#471AA0] mb-8">Almost done...</h3>
        <h2>Create your MultiSig Account</h2>
        <h4 className="text-[#737373]">
          Set owner wallets and how many need to confirm to execute a valid
          transaction{" "}
        </h4>
        <MultiSignForm cosigner={cosigner} setCosigner={setCosigner} />
        <Button onClick={completeSetup} className="bg-[#471AA0] text-white px-6 mt-8 lg:w-2/5">
          Complete setup
        </Button>
      </div>
    </Section>
  );
};

export default MultisigAccount;
