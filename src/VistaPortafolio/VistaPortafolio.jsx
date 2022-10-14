import { Link } from "react-router-dom"
import "./VistaPortafolio.css"
export function VistaPortafolio(){
    return(
        <>
        
        <section id="pantalla-divididavp">
            <div class="divtresvp">
                <img class="imagenvp my-5" src="https://firebasestorage.googleapis.com/v0/b/vistacomercial-2ff98.appspot.com/o/arquitectura.png?alt=media&token=d7c8a96a-2f41-411e-92af-f438d1943001" alt=""/>
                <img class="imagenvp my-5" src="https://firebasestorage.googleapis.com/v0/b/vistacomercial-2ff98.appspot.com/o/alimentos.jpg?alt=media&token=3f7df8d8-1718-4a54-9b98-e87b2e481314" alt=""/>
                <img class="imagenvp my-5" src="https://firebasestorage.googleapis.com/v0/b/vistacomercial-2ff98.appspot.com/o/producto.jpg?alt=media&token=06173332-f7e6-44c9-8128-cf3abcff9a64" alt=""/>
                <img class="my-5 imagen_quince" src="https://firebasestorage.googleapis.com/v0/b/vistacomercial-2ff98.appspot.com/o/social.jpg?alt=media&token=c3b700b2-b478-4e3c-86b3-ff6a45de3aad" alt=""/>
            </div>
            <div class="divcuatrovp">
                    <ul>
                        <li class="enlacecuatrovp"><Link to="/portafolio/arquitectura" class="enlacesvp">ARQUITECTURA</Link></li>
                        <li class="enlacecincovp"><Link to="/portafolio/alimentos" class="enlacesvp">ALIMENTOS</Link></li>
                        <li class="enlaceseisvp"><Link to="/portafolio/productos" class="enlacesvp">PRODUCTO</Link></li>
                        <li class="enlacesietevp"><Link to="/portafolio/social" class="enlacesvp">SOCIAL</Link></li>
                    </ul>
            </div>
        </section>
        </>
    )
}