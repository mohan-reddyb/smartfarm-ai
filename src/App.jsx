
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
