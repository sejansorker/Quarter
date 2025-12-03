
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";

function App() {
 

  return (
   <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Property />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
   </>
  )
}

export default App
