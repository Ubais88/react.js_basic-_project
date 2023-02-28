import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import "./styles/App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Services from "./components/Services.js";
import "./styles/mediaquery.scss";


function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App