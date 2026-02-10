import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homes from "./pages/Homes";

import Navbar from "./components/Navbar";
import Formulaireprparrticiper from "./pages/Formulaireprparrticiper";

import Contactus from "./pages/Contactus";
import Eventpages from "./pages/Eventpages";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
  <Route path="/nos formations" element={<Homes />} />
   
  <Route path="/contacus" element={<Formulaireprparrticiper />} />
  <Route path="/Contacus" element={<Contactus />} /> 
  <Route path="/Témoignages" element={<Eventpages />} /> 
</Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;


