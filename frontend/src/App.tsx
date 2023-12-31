import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./components/layouts";
import {
  SetUpOrgLanding,
  ConnectWallet,
  Home,
  SetUpOrg,
  MultisigAccount,
  Auth,
  Campaigns,
  Donate,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/start-here" element={<SetUpOrgLanding />} />
        <Route path="/set-up-org" element={<SetUpOrg />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/create-multisig-account" element={<MultisigAccount />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
