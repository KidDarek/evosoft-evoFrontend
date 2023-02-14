import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import Header from "./common-components/header/Header";
import Footer from "./common-components/footer/Footer";
import ContactPage from "./pages/contact-page/ContactPage";
import FaqPage from "./pages/faq-page/FaqPage";
import AboutUsPage from "./pages/about-us-page/AboutUsPage";
import ProductPage from "./pages/product-page/ProductPage";
import ProductPageAdmin from "./pages/product-page/ProductPageAdmin";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { styled } from "@mui/material";
import SearchPage from "./pages/search-page/SearchPage";
import ShopPage from "./pages/shop-page/ShopPage";

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
            <Route path="/Search" element={<SearchPage />} />
            <Route path="/Shop" element={<ShopPage />} />
            <Route path="/Profile:id" element={<ProfilePage />} />
            <Route path="/Product/:id" element={<ProductPage />} />
            <Route path="/ProductAdmin/:id" element={<ProductPageAdmin />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </StyledFontDiv>
    </>
  );
}

export default App;
