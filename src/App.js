import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./components/Products/Product";
import ToolsAccessories from "./components/Products/ToolsAccessories";
import ContactUs from "./components/Contact/ContactUs";
import SearchPage from "./pages/Search/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:itemID" element={<Product />} />
          <Route path="/tool-accessories" element={<ToolsAccessories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search/:q" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
