import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import { AuthContextProvider, ApolloContextProvider } from "./context";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, goerli, polygonMumbai } from "wagmi/chains";

const chains = [arbitrum, goerli, polygonMumbai];
const projectId = "1adfaa8981abbfb9bc5e173cb7342448";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig config={wagmiConfig}>
        <MetaMaskProvider>
          <ApolloContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </ApolloContextProvider>
        </MetaMaskProvider>
      </WagmiConfig>
    </BrowserRouter>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </React.StrictMode>,
);
