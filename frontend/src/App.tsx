import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./components/layouts";
import { AuthLanding, ConnectWallet, Home, SetUpOrg } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<AuthLanding />} />
        <Route path="/set-up-org" element={<SetUpOrg />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Route>
    </Routes>
  );
}

export default App;
