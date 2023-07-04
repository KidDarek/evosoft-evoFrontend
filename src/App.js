import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import Header from "./common-components/header/Header";
import Footer from "./common-components/footer/Footer";
import ContactPage from "./pages/contact-page/ContactPage";
import FaqPage from "./pages/faq-page/FaqPage";
import AboutUsPage from "./pages/about-us-page/AboutUsPage";
import ProductPageWithContext from "./pages/product-page/ProductPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { styled } from "@mui/material";
import SearchPage from "./pages/search-page/SearchPage";
import ShopPage from "./pages/shop-page/ShopPage";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";
import AddProductPageWithContext from "./pages/product-page/AddProductPage";
import AnswerQuestionPage from "./pages/answer-question-page/AnswerQuestionPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const MainTheme = createTheme({
  palette: {
    green: {
      main: "#00cc99",
      contrastText: "#fff",
    },
    red: {
      main: "#ff0055",
      dark: "#990033",
      contrastText: "#fff",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    button: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
});

const BodyContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100vh",
  fontFamily: "Roboto",
  backgroundColor: "#00efb3",
  overflowX: "hidden",
});

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <BodyContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/FAQ" element={<FaqPage />} />
            <Route path="/About-Us" element={<AboutUsPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Search" element={<SearchPage />} />
            <Route path="/Shop" element={<ShopPage />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route path="/AnswerQuestion" element={<AnswerQuestionPage />} />
            <Route path="/Profile:id" element={<ProfilePage />} />
            <Route path="/Product/:id" element={<ProductPageWithContext />} />
            <Route path="/AddProduct" element={<AddProductPageWithContext />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </BodyContainer>
    </ThemeProvider>
  );
}

export default App;
