import { connect } from "@/assets";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { NetworkSwitch } from "@/components/ui/network-switch";
import W3Button from "@/components/ui/web3button";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { status, account, chainId, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const prevPath = location.state.from.pathname;

  const getStatusMsg = () => {
    switch (status) {
      case "initializing":
        return "Synchronisation with Wallet ongoing...";
      case "unavailable":
        return "Wallet not available...";
      case "notConnected":
        return "Connect to Wallet";
      case "connecting":
        return "Connecting...";
      case "connected":
        return `Connected account ${account} on chain ID ${chainId}`;
      default:
        return "Unknown status";
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`${prevPath}`, {
        state: { from: location },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <Section>
        <div className="font-robotoSlab text-2xl font-bold mb-4">
          {getStatusMsg()}
        </div>
        {status === "unavailable" && (
          <Button
            variant="link"
            className="text-xl font-normal px-8 py-4"
            onClick={() =>
              window.open("https://metamask.io/download", "_blank")
            }
          >
            Download MetaMask
          </Button>
        )}
        {status === "notConnected" && (
          <div className="flex flex-col items-center  my-10">
            <img src={connect} alt="conect" className="w-[500px] mb-8" />
            <div className="flex gap-10 items-center my-6">
              <label>Select Chain</label>
              <NetworkSwitch />
            </div>
            <div className="flex gap-10 items-center my-6">
              <label>Select Wallet</label>
              <W3Button />
            </div>
          </div>
        )}
        {status === "connected" && (
          <Button
            className="text-xl font-normal px-8 py-4"
            onClick={() =>
              navigate(`${prevPath}`, {
                state: { from: location },
              })
            }
          >
            Refresh
          </Button>
        )}
      </Section>
    </div>
  );
};

export default Auth;
