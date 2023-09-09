import { Dispatch, SetStateAction } from "react"
import { useAccount } from 'wagmi'

interface MultisigAccProps {
  cosigner: string
  setCosigner: Dispatch<SetStateAction<string>>
}

const MultiSignForm = ({ cosigner, setCosigner }: MultisigAccProps) => {
  const { address } = useAccount();



  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center w-full lg:w-4/5">
      <div className="flex flex-col w-full mt-5 md:w-1/2">
        <div className="flex flex-col md:text-left gap-2 my-5">
          <label className="text-[#471AA0]">Wallet Address</label>
          <input disabled placeholder="Address 1" value={address || ""} type="text" className=" rounded-md" />
        </div>
        <div className="flex flex-col md:text-left gap-2 my-5">
          <label className="text-[#471AA0]">Wallet Address</label>
          <input placeholder="Address 2" value={cosigner} onChange={(e) => setCosigner(e.target.value)} type="text" className=" rounded-md" />
        </div>
      </div>
      <div className="flex flex-col items-center md:text-left md:items-start gap-2">
        <h3>Threshold</h3>
        <p className="mb-8">Any transaction requires the confirmation of:</p>
        <input type="number" defaultValue={2} disabled className="w-10 h-10" />
        <p>out of 2 owner(s)</p>
      </div>
    </div>
  );
};

export default MultiSignForm;
