import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./components/layouts";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
