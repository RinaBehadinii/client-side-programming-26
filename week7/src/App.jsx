import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:id" element={<ProductDetails/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
}

export default App
