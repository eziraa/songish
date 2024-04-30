import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "../../components/pages/get-started/get-started";
import HomePage from "../../components/pages/homepage/home-page";

export const routerConfig = () => (
  <Router>
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
);
