import "./ListadoAlimentos.css"
import { Link } from "react-router-dom"
export function ListadoAlimentos(){
    return(
        <>
        
        <section id="pantalla-divididavp">
            <div class="tresvp">
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/CERV%20(3).jpg?alt=media&token=39a96eeb-2c02-4d6c-bbbe-a431473cecac" alt=""/>
                <img class="imagenvp mt-4" src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/FOTO%20H%20(1).jpg?alt=media&token=eb650b3b-417e-4609-adc0-778d10ae4e02" alt=""/>
                <img class="imagenvp mt-4" src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/FOTO%20HEL%20(4).jpg?alt=media&token=4b5ba0c3-9bfa-445d-8a8e-333e2d325e79" alt=""/>
            </div>
            <div class="cuatrovp">
                    <ul>
                        <li class="enlacecuatrovp"><Link to="" class="enlacesvp">BEBIDAS</Link></li>
                        <li class="enlacecincovp"><Link to="/portafolio/alimentos/hamburguesa" class="enlacesvp">HAMBURGUESAS</Link></li>
                        <li class="enlaceseisvp"><Link to="" class="enlacesvp">HELADOS</Link></li>
                    </ul>
            </div>
        </section>
        </>
    )
}