import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Navbar from "../Components/Navbar";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
