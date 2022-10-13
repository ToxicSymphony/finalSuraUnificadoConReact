import { Routes, Route, Link } from "react-router-dom";
import { Menu } from "../Menu/Menu.jsx";
import { Principal } from "../Principal/Principal.jsx";
import { SobreMi } from "../SobreMi/SobreMi.jsx";
import { CasaAlicante } from "../CasaAlicante/CasaAlicante.jsx";
import { CircuitoMuseoGrafico } from "../CircuitoMuseoGrafico/CircuitoMuseoGrafico.jsx";


export function Rutas (){
    return (
        <div className="App">
          <Menu></Menu>
          <Routes>
          <Route path="/inicio" element={<Principal />} />
            <Route path="/circuito" element={<CircuitoMuseoGrafico />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/casaalicante" element={<CasaAlicante />} />
            
          </Routes>
        </div>
      );

}