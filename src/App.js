import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import DummyPage from "./DummyPage";
import Header1 from "./header/Header1";
import SecondComponent from "./SecondComponent";

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
    </>
  );
}

export default App;
