import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@/context/AuthContext";
// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  //   const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  //   const location = useLocation();

  //   const prevPath = location.state.from.pathname;

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       navigate(`${prevPath}`, {
  //         state: { from: location },
  //       });
  //     }
  //   }, []);

  return (
    <Section>
      <div className="w-full flex flex-col items-center justify-center py-40 text-center">
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
