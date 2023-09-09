import { Button } from "@/components/ui/button";
import { ChangeEvent, MouseEvent, useRef } from "react";
import { nsawaContract } from "@/contract";
import { useState } from 'react';
import { useAuth } from "@/context/AuthContext";
import MultisigAccount from "../MultisigAccount";

const SetUpOrgForm = ({ handleSubmit }: { handleSubmit?: () => void }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [cosigner, setCosigner] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [imgurl, setImgUrl] = useState("");

  const [next, setNext] = useState(false);
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent) => {
    event.preventDefault();
    // const fileUploaded = event.target.files[0];
  };

  let signers = ["0x1731D34B07CA2235E668c7B0941d4BfAB370a2d0", "0x8f6a1720e717d2621b0eab2dd315c6a7d830653e"]

  const { signer } = useAuth()
  const completeSetup = async () => {
    console.log("signer", signer)
    console.log("cosigner", cosigner)
    await nsawaContract.connect(signer).addOrganisation(signers, name, description, website, imgurl);
  }

  return (
    next ? <MultisigAccount complete={completeSetup} cosigner={cosigner} setCosigner={setCosigner} /> : <form onSubmit={handleSubmit} className="md:w-1/2">
      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Name of organization</label>
        <input
          placeholder="Type name of org"
          type="text"
          className="w-3/5 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Organization Website</label>
        <input
          placeholder="https://www.example.com"
          type="text"
          className="w-3/5 rounded-md"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Brief Description</label>
        <textarea
          placeholder="Brief description of org"
          rows={3}
          className="w-3/5 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Logo URL</label>
        <input
          placeholder="https://img.example.com"
          type="text"
          className="w-3/5 rounded-md"
          value={imgurl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>

      <Button
        className="text-white bg-[#471AA0] text-xl mt-12 flex w-full hover:bg-black shadow-md hover:text-white px-6"
        onClick={() => setNext(true)}
      >
        Next
      </Button>

    </form>
  );
};

export default SetUpOrgForm;
