import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import Header1 from "./Header1";
import SecondComponent from "./SecondComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/second" element={<SecondComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
