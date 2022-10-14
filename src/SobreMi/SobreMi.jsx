import "./SobreMi.css"

export function SobreMi(){
    return(
        <>
        <div className="cualquiera">
            <div className="container-fluid  dark position-absolute end-0  contenedor2 z-index">
        <div className="row row-cols-2 row-md-2  dark justify-content-center ">
            <div className="col-12 col-md-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/retratos.jpg?alt=media&token=1f1d5143-1644-475a-958d-b2867cf4583a" alt="" class="img-fluid w-100 "/>
            </div>
                <div className="col-12 col-md-6  text-light  text-center mt-5 dark align-self-center ">
                    <p className="fs-1 ">Hola, soy <span className="text-amarillo fs-1">OSCAR CANO</span> arquitecto y fotografo</p>
                    <p className="fs-2 ">
                      ... Arquitecto interesado en el desarrollo del conocimiento y
                      experimentación dela Arquitectura, basado en competencias y
                      habilidades en Diseño y Representación gráfica, que busca en la
                      Fotografía, un complemento creativo, sensible y productivo, para
                      el crecimiento personal y profesional
                    </p>
                    
                    <div className="row d-flex justify-content-around mt-5 dark">
                      <div className="col-6 text-center">
                        <p className="fs-6">
                          ARQUITECTO
                        </p>
        
                      </div>
                      <div className="col-6 text-center">
                        <p className="fs-6">
                          FOTOGRAFO
                        </p>
        
                      </div>
        
                      <div className="row d-flex justify-content-around">
                        <div className="col-6 col-md-6 text-center ">
                          <p className="fs-6">
                            Universidad Pontificia Bolivariana
                          </p>
          
                        </div>
                        <div className="col-6 col-md-6 text-center ">
                          <p className="fs-6">
                            CESDE
                          </p>
                        </div>
                    </div>

            </div>
        </div>
    </div>
    </div>
    </div>
        </>
    )
}