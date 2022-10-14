import "./VistaSocial.css"
import { Link } from "react-router-dom"
export function VistaSocial(){
    return(
        <>
        
        <section id="pantalla-divididavp">
            <div class="tresvp">
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/social%2FBODA%20(4).jpg?alt=media&token=eeda950f-a215-4607-9dad-6ea73e33c856" alt=""/>
                <img class="imagenvp" src="https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/social%2FCORPORATIVA%20(3).jpg?alt=media&token=001781c9-fad5-43ce-a7de-5c42c2c241e6" alt=""/>
                <img class="imagenvp"  src="https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/social%2FQUINCE%20(1).jpg?alt=media&token=c1d18d95-1cae-43ae-9e47-a2df62d23c76" alt=""/>      
            </div>
            <div class="cuatrovp">
                    <ul>
                        <li class="enlacecuatrovp"><Link to="/portafolio/arquitectura/casaalicante" class="enlacesvp">BODA</Link></li>
                        <li class="enlacecincovp"><Link to="/portafolio/arquitectura/circuitomuseografico" class="enlacesvp">CORPORATIVO</Link></li>
                        <li class="enlaceseisvp"><Link to="" class="enlacesvp">QUINCES</Link></li>                       
                    </ul>
            </div>
        </section>
        </>
    )
}