import { macVision, macVisionMobile } from "@/assets";

const Vision = () => {
  return (
    <div className="flex md:flex-row flex-col gap-8 items-center md:mb-40  mb-20 ">
      <div className="lg:pl-20 md:pl-6 pl-4 md:text-left text-center">
        <h3 className="text-[#471AA0]">VISION</h3>
        <h2>
          To make charity giving not only{" "}
          <span className="text-[#471AA0]">easy</span> but also{" "}
          <span className="text-[#471AA0]">transparent</span> and{" "}
          <span className="text-[#471AA0]">secure</span>
        </h2>
        <h4 className="text-[#737373]">Through on-chain donations</h4>
      </div>
      <img src={macVision} alt="macbook" className="hidden md:flex md:w-1/2" />
      <img src={macVisionMobile} alt="macbook" className="md:hidden" />
    </div>
  );
};

export default Vision;
