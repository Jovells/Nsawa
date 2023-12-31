import { Link, useLocation, useNavigate } from "react-router-dom";
import PaymentBox from "./components/PaymentBox";
import { logo, transfer } from "@/assets";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const Donate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", {
        state: { from: location },
      });
    }
  }, [isAuthenticated]);

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="donate-bg relative hidden h-full flex-col bg-[#471AA0] px-10 pt-5 pb-10 text-white dark:border-r lg:flex">
        <Link to="/">
          <img src={logo} alt="logo" className="w-48" />
        </Link>

        <div className="flex items-center h-full justify-center shadow-2xl">
          <img src={transfer} alt="transfer" />
        </div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col mb-3">
            <PaymentBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
