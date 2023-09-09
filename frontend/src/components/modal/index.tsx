import { Web3Modal } from "@web3modal/react";
import { useMetaMask } from "metamask-react";
import { ethers } from "ethers";

const W3Modal = () => {
    const { ethereum } = useMetaMask()
    const ethprovider = new ethers.BrowserProvider(ethereum);
    const projectId = process.env.VITE_PROJECT_ID;
    return (
        <Web3Modal projectId={projectId} ethereumClient={ethprovider} />;
    )
}
