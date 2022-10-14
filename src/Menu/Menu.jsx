import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <div className="menu-lateral">
        <div id="header">
          <div id="menu-btn">
            <div className="btn-hamburguer"></div>
            <div className="btn-hamburguer"></div>
            <div className="btn-hamburguer"></div>
          </div>
        </div>

        <img
          className="barra_lateral"
          src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/aside.png?alt=media&token=466a09f0-d93b-40e1-af1c-c70381676827"
          alt=""
        />

        
        <div id="profile">
          <div className="conteneder">
            <img
              className="logo img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/foto.png?alt=media&token=6488b366-9e01-4931-8ccd-f38eff12c488"
              alt=""
              height="200px"
            />
          </div>
          <div id="name">
            <span className="first-name">PRYSMA P</span>
            <span className="second-name">HOTOGRAPHY</span>
          </div>
          <div id="name">
            <span className="text-series">
              Series fotográficas
              <br />
              arquitectónicas
            </span>
          </div>
          <div id="name">
            <span className="name-principal">OSCAR CANO</span>
          </div>
        </div>

        

        

        <div className="item">
          <Link className="enlaces nav" to="/inicio">
            INICIO
          </Link>
          <Link className="enlaces nav" to="/portafolio">
            PORTAFOLIO
          </Link>
          <Link className="enlaces nav" to="/sobremi">
            SOBRE MI
          </Link>
          <Link className="enlaces nav" to="/casaalicante">
            CONTACTO
          </Link>
        </div>

        <div id=" redes-sociales">
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/instagram.png?alt=media&token=959219e6-40f0-4ef8-aceb-aa2c850d2ac5"
              alt=""
            />
          </Link>
          <Link to="/sobremi" className="red__linkedin">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fotosantojodap.appspot.com/o/linkedin.png?alt=media&token=0499ece9-1074-41b7-99cb-9921297edd47"
              alt=""
            />
          </Link>
        </div>

        <footer class="footer">
          <div class="pie-pagina">
            <p class="texto-footer">
              Copyright ©. Todos los derechos reservados. 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
