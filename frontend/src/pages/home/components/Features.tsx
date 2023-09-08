import K from "@/constants";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="flex flex-col items-center md:mb-40 mx-10 mb-20  text-center">
      <h2>AMAZING FEATURES</h2>
      <h4 className="text-[#737373]">Funds Traceable, Charities Accountable</h4>
      <div className="flex justify-evenly gap-12 my-12 flex-wrap">
        {K.FEATURES.map((feat) => (
          <div className="flex flex-col shadow-lg rounded-md items-center p-16 gap-4">
            <img src={feat.icon} alt="feature" className="mb-5" />
            <h3>{feat.mainText}</h3>{" "}
            <p className="text-[#737373]">{feat.subText}</p>
            <Link to="/" className="text-[#471AA0]">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
