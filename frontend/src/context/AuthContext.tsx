/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMetaMask } from "metamask-react";
import {
  AddEthereumChainParameter,
  MetaMaskState,
} from "metamask-react/lib/metamask-context";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { nsawaContract } from "@/contract";
import { ethers } from "ethers";

type AuthContextType = {
  isAuthenticated: boolean;
  provider: never;
} & MetaMaskState & {
    connect: () => Promise<string[] | null>;
    addChain: (parameters: AddEthereumChainParameter) => Promise<void>;
    switchChain: (chainId: string) => Promise<void>;
    ethereum?: never;
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

  const [provider, setProvider] = useState<never>();
  const [signer, setSigner] = useState<never>();
  const [connectedContract, setConnectedContract] = useState<never>();

  useEffect(() => {
    async function init() {
      if (props.ethereum) {
        const ethprovider = new ethers.BrowserProvider(props.ethereum);
        const newSigner = await ethprovider.getSigner();
        //@ts-ignore
        setConnectedContract(nsawaContract.connect(newSigner));
        //@ts-ignore
        setProvider(ethprovider);
        //@ts-ignore
        setSigner(newSigner);
      }
    }
    init();
  }, [props.ethereum, signer]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        //@ts-ignore
        provider,
        signer,
        connectedContract,
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
