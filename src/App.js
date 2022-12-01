import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import Header from "./common-components/header/Header";
import Footer from "./common-components/footer/Footer";
import ContactPage from "./pages/contact-page/ContactPage";
import FaqPage from "./pages/faq-page/FaqPage";
import AboutUsPage from "./pages/about-us-page/AboutUsPage";
import ProductPage from "./pages/product-page/ProductPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { styled } from "@mui/material";

const StyledFontDiv = styled("div")({
  fontFamily: "Roboto"
});


function App() {
  return (
    <>
    <StyledFontDiv>
    <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/FAQ" element={<FaqPage />} />
            <Route path="/About-Us" element={<AboutUsPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Profile:id" element={<ProfilePage />} />
            <Route path="/Product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </StyledFontDiv>
    </>
  );
}

export default App;
