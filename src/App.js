import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DummyPage from "./DummyPage";
import Header1 from "./header/Header1";
import Footer from "./footer/Footer";
import Bestdeals from "./bestdeals/Bestdeals";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header1 />
          <Routes>
            <Route path="/" element={<DummyPage text="Main page"/>} />
            <Route path="/FAQ" element={<DummyPage text="FAQ page"/>} />
            <Route path="/About-Us" element={<DummyPage text="About us page"/>} />
            <Route path="/Contact" element={<DummyPage text="Contact page"/>} />
          </Routes>
      </BrowserRouter>
      <Bestdeals />
      <Footer />
    </>
  );
}

export default App;
