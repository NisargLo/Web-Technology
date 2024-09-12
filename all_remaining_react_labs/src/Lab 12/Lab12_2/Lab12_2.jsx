// Develop basic website using 5 different component (pages) and implement Routing in it. (i.e. About, Contact etc…)

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
