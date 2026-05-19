import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./components/Login";
// DAHBOARD
// import Dashboard from "./page/Dashboard";
// import Homes from "./components/Dashboard/Homes"
// import Abouts from "./components/Dashboard/Abouts"
// import Contacts from "./components/Dashboard/Contacts";
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
          {/* dashboard
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<Homes/>}></Route>
            <Route path="homes" element={<Homes/>}></Route>
            <Route path="abouts" element={<Abouts/>}></Route>
            <Route path="contacts" element={<Contacts/>}></Route>
          </Route> */}
        </Routes>
      </MainLayout>
  );
}

export default App;
