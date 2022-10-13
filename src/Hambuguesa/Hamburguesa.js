import './Hamburguesa.css'
export function Hambuguesa(){
    return(
        <>
            <main className="contenedor">
                <div className="row mt-4 texto_casa">
                    <div className="col-12 col-md-9 mt-4">
                        <h1 className="text-light justify-content-center titulo_casa">HAMBURGUESAS</h1>
                        <p class="hamburguesa text-secondary">Comida americana</p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10">
                        <img className="img-fluid w-100" src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/Hamburguesas%2FFOTO%20H%20(1).jpg?alt=media&token=202a72f0-6e34-49f5-8d66-76419179ab62" alt="foto1"/>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10">
                        <img className="img-fluid w-100" src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/Hamburguesas%2FFOTO%20H%20(2).jpg?alt=media&token=5cdffb8c-e3de-4914-9002-38582fb05e83" alt="foto2"/>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10">
                        <img className="img-fluid w-100" src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/Hamburguesas%2FFOTO%20H%20(3).jpg?alt=media&token=090df5be-3911-4281-9e20-c14485f02477" alt="foto3"/>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-10 ms-auto">
                        <img className="img-fluid w-75" src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/Hamburguesas%2FFOTO%20H%20(4).jpg?alt=media&token=63ab5ca6-b843-47a7-a431-302801fe97f3" alt="foto4"/>
                    </div>
                </div>

            </main>
        
        </>
    )
}