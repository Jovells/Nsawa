import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { EthereumClient } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { WagmiConfig } from 'wagmi'
import { config } from "./wagmiconfig.ts";
import { polygonMumbai } from 'wagmi/chains'

const projectId = '1adfaa8981abbfb9bc5e173cb7342448' //Put in .env variable PROJECT_ID

const chains = [polygonMumbai]

const ethereumClient = new EthereumClient(config, chains)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig config={config}>
        <MetaMaskProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MetaMaskProvider>
      </WagmiConfig>
    </BrowserRouter>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </React.StrictMode>,
);
