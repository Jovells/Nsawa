import { useMetaMask } from "metamask-react";
import {
  AddEthereumChainParameter,
  MetaMaskState,
} from "metamask-react/lib/metamask-context";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { donation } from "@/contract";
import { ethers } from "ethers";

type AuthContextType = {
  isAuthenticated: boolean;
} & MetaMaskState & {
  connect: () => Promise<string[] | null>;
  addChain: (parameters: AddEthereumChainParameter) => Promise<void>;
  switchChain: (chainId: string) => Promise<void>;
  ethereum?: unknown;
};

const AuthContext = createContext({
  isAuthenticated: false,
} as AuthContextType);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const props = useMetaMask();

  const isAuthenticated = Boolean(
    props.chainId && props.status === "connected" && props.account,
  );

  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [connectedContract, setConnectedContract] = useState();

  useEffect(() => {
    async function init() {
      if (props.ethereum) {
        const ethprovider = new ethers.BrowserProvider(props.ethereum);
        const newSigner = await ethprovider.getSigner();
        // setConnectedContract(donation.connect(newSigner));
        // setProvider(ethprovider);
        setSigner(signer);
      }
    }
    init();
  }, [props.ethereum, signer]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        // provider,
        // connectedContract,
        ...props,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return React.useContext(AuthContext);
};