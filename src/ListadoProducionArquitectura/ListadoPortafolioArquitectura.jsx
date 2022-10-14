import "./ListadoPortafolioArquitectura.css"
import { Link } from "react-router-dom"
export function ListadoArquitectura(){
    return(
        <>
        
        <section id="pantalla-divididavp">
            <div class="tresvp">
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/1.png?alt=media&token=3cd259cd-8d43-41c6-850b-1d737b483682" alt=""/>
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/1.jpg?alt=media&token=16e50da0-f9ec-4261-a00c-71fde768e3a6" alt=""/>
                <img class="https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/arquitectura%2F6.jpg?alt=media&token=e9de22af-a5d9-47d6-a257-d528de2f2e22" alt=""/>
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/escuelas-indigenas.appspot.com/o/2.jpg?alt=media&token=409928d2-3042-4066-bcd3-4f4c01adcaef" alt=""/>
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/arquitectura%2F3.jpg?alt=media&token=847c61ba-de24-41be-ae6e-bdc4942e35bf" alt=""/>
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/puntosfijos-c1417.appspot.com/o/5.jpg?alt=media&token=1852e4ef-c12e-4a5a-a2bd-a0e79c56ce66" alt=""/>
            </div>
            <div class="cuatrovp">
                    <ul>
                        <li class="enlacecuatrovp"><Link to="/portafolio/arquitectura/casaalicante" class="enlacesvp">CASA ALICANTE</Link></li>
                        <li class="enlacecincovp"><Link to="/portafolio/arquitectura/circuitomuseografico" class="enlacesvp">CIRCUITO MUSEOGRÁFICO</Link></li>
                        <li class="enlaceseisvp"><Link to="/portafolio/arquitectura/escuelaindigena" class="enlacesvp">ESCUELA INDÍGENAS</Link></li>
                        <li class="enlacesietevp"><Link to="/portafolio/arquitectura/pielesarquitectura" class="enlacesvp">PIELES DE ARQUITECTURA</Link></li>
                        <li class="enlacesochovp"><Link to="/portafolio/arquitectura/puntosfijos" class="enlacesvp">PUNTOS FIJOS</Link></li>
                    </ul>
            </div>
        </section>
        </>
    )
}