// Develop full static website using 15 different component (pages) and implement Routing in it. (i.e. About, Contact etc...)

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Products";
import Services from "./Pages/Services";
import Not_Found from "./Pages/404 Page (Not Found)";
import Blog from "./Pages/Blog";
import Businesses from "./Pages/Businesses";
import Careers from "./Pages/Careers";
import Confirmation from "./Pages/Confirmation";
import FAQs from "./Pages/FAQs";
import Login from "./Pages/Login";
import Portfolio from "./Pages/Portfolio";
import Privacy_Policy from "./Pages/Privacy Policy";
import Reviews from "./Pages/Reviews";
import Layout from "./Page Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Not_Found" element={<Not_Found />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Businesses" element={<Businesses />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
