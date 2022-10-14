import React from "react";
import './Contacto.css'

export const Contacto= () => {
  return (
    <div >
      <div className="row">
        <div className="informacion">
          <div className="textoInfo container">
            <div className="row mt-5">
              <div className="col-sm-1 ">
                {" "}
                <img src="https://firebasestorage.googleapis.com/v0/b/vistacontacto-febac.appspot.com/o/ubicacion.png?alt=media&token=50f66041-5702-4f29-9964-3e1836cf7383" alt="Ubicacion" />
              </div>
              <div className="col-sm-3 ">
                <span>UBICACION MDE-CO</span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-1 ">
                {" "}
                <img src="https://firebasestorage.googleapis.com/v0/b/vistacontacto-febac.appspot.com/o/phone.png?alt=media&token=6bd2122a-5165-49e2-98ab-8f08eacdb5d9" alt="Telefono" />
              </div>
              <div className="col-sm-3">
                <span>TELEFONO +573002003040</span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-1">
                {" "}
                <img src="https://firebasestorage.googleapis.com/v0/b/vistacontacto-febac.appspot.com/o/carta.png?alt=media&token=77ef6fb3-9824-4d03-89da-e59daaa0f149" alt="Carta" />
              </div>
              <div className="col-sm-3">
                <span>CORREO oscar@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="formContact">
        <div className=" float-right p-5 ">
          <form >          
            <h1 className="pt-3 pe-5">CONTÁCTAME</h1>
            <div className="form-row d-flex p-5 justify-content-around">
              <div className="form-group col-md-4">
                <label for="inputEmail4">NOMBRE</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"                  
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">EMAIL</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">ASUNTO</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
              />
            </div>
            <div className="form-group mt-5">
              <label for="inputAddress2">MENSAJE</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
              />
            </div> 
          </form>
          </div>
        </div>
    </div>
  );
};
