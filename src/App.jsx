import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./components/Login";
// ... import ផ្សេងៗទៀត

function App() {
  return (
      <MainLayout>
        <Routes>
          {/* កំណត់ path="/" ដើម្បីឱ្យវាបង្ហាញ Home ភ្លាមពេលបើក Web ដំបូង */}
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
  );
}

export default App;