import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { ChangeEvent, MouseEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SetUpOrgForm = ({ handleSubmit }: { handleSubmit?: () => void }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent) => {
    event.preventDefault();
    // const fileUploaded = event.target.files[0];
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2">
      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Name of organization</label>
        <input
          placeholder="Type name of org"
          type="text"
          className="w-3/5 rounded-md"
        />
      </div>
      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Organization Website</label>
        <input
          placeholder="https://www.example.com"
          type="text"
          className="w-3/5 rounded-md"
        />
      </div>
      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Brief Description</label>
        <textarea
          placeholder="Brief description of org"
          rows={3}
          className="w-3/5 rounded-md"
        />
      </div>

      <div className="flex items-center justify-between my-5">
        <label className="text-[#471AA0]">Upload logo</label>
        <div className="w-3/5">
          <input
            type="file"
            className="hidden"
            ref={hiddenFileInput}
            onChange={handleChange}
          />
          <button onClick={handleClick}>
            <Upload className="text-[#471AA0] w-8 h-8" />
          </button>
        </div>
      </div>

      <Button
        className="text-white bg-[#471AA0] text-xl mt-12 flex w-full hover:bg-black shadow-md hover:text-white px-6"
        onClick={() => navigate("/connect-wallet")}
      >
        Next
      </Button>
    </form>
  );
};

export default SetUpOrgForm;
