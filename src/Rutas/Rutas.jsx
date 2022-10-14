import { Routes, Route, Link } from "react-router-dom";
import { Menu } from "../Menu/Menu.jsx";
import { Principal } from "../Principal/Principal.jsx";
import { SobreMi } from "../SobreMi/SobreMi.jsx";
import { CasaAlicante } from "../CasaAlicante/CasaAlicante.jsx";
import { CircuitoMuseoGrafico } from "../CircuitoMuseoGrafico/CircuitoMuseoGrafico.jsx";
import { VistaPortafolio } from "../VistaPortafolio/VistaPortafolio.jsx";
import { ListadoArquitectura } from "../ListadoProducionArquitectura/ListadoPortafolioArquitectura.jsx";
import { PielesArquitectonicas } from "../PielesArquitectonicas/PielesArquitectonicas.jsx";
import { PuntosFijos } from "../PuntosFijos/PuntosFijos.jsx";
import { ListadoAlimentos } from "../ListadoAlimentos/ListadoAlimentos.jsx";
import { Hamburguesa } from "../Hambuguesa/Hamburguesa.jsx";
import { ListadoProduccionesProductos } from "../ListadoProduccionesProducto/ListadoProduccionesProductos.jsx";
import { VistaSocial } from "../ListaProduccionSocial/VistaSocial.jsx";






export function Rutas (){
    return (
        <div className="App">
          <Menu></Menu>
          {/* <VistaPortafolio></VistaPortafolio> */}
          <Routes>
          <Route path="/inicio" element={<Principal />} />
            <Route path="/portafolio" element={<VistaPortafolio/>} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/portafolio/arquitectura" element={<ListadoArquitectura />} />
            <Route path="/portafolio/arquitectura/casaalicante" element={<CasaAlicante />} />
            <Route path="/portafolio/arquitectura/circuitomuseografico" element={<CircuitoMuseoGrafico />} />
            <Route path="/portafolio/arquitectura/pielesarquitectura" element={<PielesArquitectonicas />} />
            <Route path="/portafolio/arquitectura/puntosfijos" element={<PuntosFijos />} />
            <Route path="/portafolio/alimentos" element={<ListadoAlimentos />} />
            <Route path="/portafolio/alimentos/hamburguesa" element={<Hamburguesa />} />
            <Route path="/portafolio/productos" element={<ListadoProduccionesProductos />} />
            <Route path="/portafolio/social" element={<VistaSocial />} />
            

            
            
          </Routes>
        </div>
      );

}