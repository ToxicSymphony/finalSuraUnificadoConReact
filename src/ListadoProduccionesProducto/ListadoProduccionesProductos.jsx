import "./ListadoProduccionesProductos.css"
import { Link } from "react-router-dom"
export function ListadoProduccionesProductos(){
    return(
        <>
        
        <section id="pantalla-grande">
            <div class="tresvp">
                <img class="imagenvp my-5" src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Copas.jpg?alt=media&token=009d5a1c-62dc-4d5f-891a-c5b56c9f56bb" alt=""/>
                <img class="imagenvp my-5" src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Lociones.jpg?alt=media&token=06391bfe-2067-42fd-a53d-82100b5487bb" alt=""/>
                <img class="imagenvp my-5" src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Tenedores.jpg?alt=media&token=80d87415-e821-4548-8dc8-8665fd09e5ad" alt=""/>
                {/* <img class="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Tenedores.jpg?alt=media&token=80d87415-e821-4548-8dc8-8665fd09e5ad" alt=""/> */}
            </div>
            <div class="fourvp">
                    <ul>
                        <li class="enlacecopas"><Link to="/portafolio/arquitectura/casaalicante" class="enlacesvp">COPAS</Link></li>
                        <li class="enlacelociones"><Link to="/portafolio/arquitectura/circuitomuseografico" class="enlacesvp">LOCIONES</Link></li>
                        <li class="enlacetenedores"><Link to="" class="enlacesvp">TENEDORES</Link></li>
                    </ul>
            </div>
        </section>
        </>
    )
}