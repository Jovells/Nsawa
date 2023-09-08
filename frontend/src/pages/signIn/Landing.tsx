import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="w-full flex flex-col items-center justify-center py-28 md:py-40 text-center">
        <h1>Ready to Amplify your Impact?</h1>
        <Button
          className="text-white bg-[#471AA0] text-xl my-12 hover:bg-black shadow-md hover:text-white px-6"
          onClick={() => navigate("/set-up-org")}
        >
          Start here
        </Button>
      </div>
    </Section>
  );
};

export default Landing;
