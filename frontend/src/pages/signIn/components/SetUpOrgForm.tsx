import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import { ChangeEvent, MouseEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { donation } from "@/contract";

const SetUpOrgForm = ({ handleSubmit }: { handleSubmit?: () => void }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [imgurl, setImgUrl] = useState("");


  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent) => {
    event.preventDefault();
    // const fileUploaded = event.target.files[0];
  };

  let signers = ["0x1731D34B07CA2235E668c7B0941d4BfAB370a2d0", "0x683287150dE08509909E7efA8e4609DA8E34360F"]

  const createOrg = async () => {
    await donation.addOrganization(signers, name, description, website, imgurl);
    donation.on("Added organization", (organisationCounter,
      name,
      description,
      website,
      logo) => {
      console.log("name", name, "description", description, "website", website, "logo", logo, "counter", organisationCounter)
    })


  }

  //console.log("res", createOrg)

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2">
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
        <label className="text-[#471AA0]">Upload logo</label>
        <div className="w-3/5">
          <input
            placeholder="image url"
            className="w-3/5 rounded-md"
            value={imgurl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          {/* <button onClick={handleClick}>
            <Upload className="text-[#471AA0] w-8 h-8" />
          </button> */}
        </div>
      </div>

      <Button
        className="text-white bg-[#471AA0] text-xl mt-12 flex w-full hover:bg-black shadow-md hover:text-white px-6"
        onClick={createOrg}
      >
        Next
      </Button>
    </form>
  );
};

export default SetUpOrgForm;
