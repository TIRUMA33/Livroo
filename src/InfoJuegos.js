import "./assets/infoLibro.css";
import Footer from "./components/Footer.js";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/libro1.jpg";
import libro from "./assets/juegos1.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

export const InfoJuegos = () => {
  return (
    <>
      <Headerbar />
      <div className="infoLibro-body">
        <div className="container">
          <p style={{ fontSize: "large" }}>
            <Link to="/home" className="link">
              Libros
            </Link>{" "}
            &gt; Los Juegos Del Hambre
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card align-items-center" style={{ border: 0 }}>
                <img
                  id="portada"
                  src={port}
                  aria-label="Portada del libro Los Juegos del Hambre"
                />
                <div style={{ marginTop: 20, marginBottom: 50 }}>
                  <button
                    className="btn btn-primary bg-success border-success"
                    style={{
                      width: 353,
                      height: 70,
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    SEGUIR LEYENDO
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            ¡Disfrute de su lectura!
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <embed
                            src={libro}
                            width="100%"
                            height={800}
                            type="application/pdf"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ border: 0 }}>
                <h2 className="featurette-heading fw-normal lh-1">
                  Los Juegos del Hambre{" "}
                </h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3 style={{ marginRight: 10 }}>Suzanne Collins</h3>
                  <Link to="/biography" className="link">
                    <i>
                      <span className="fs-6" aria-label="Saber más del autor">
                        (Saber más)
                      </span>
                    </i>
                  </Link>
                </div>
                <h5>Sinopsis:</h5>
                <p>
                  "En una oscura versión del futuro próximo, doce chicos y doce
                  chicas se ven obligados a participar en un reality show
                  llamado Los Juegos del Hambre. Sólo hay una regla: matar o
                  morir" "Cuando Katniss Everdeen, una joven de dieciséis años,
                  se presenta voluntaria para ocupa el lugar de su hermana en
                  los juegos, lo entiende como una condena a muerte. Sin embargo
                  Katniss ya ha visto la muerte de cerca; y la supervivencia
                  forma parte de su naturaleza."
                </p>
              </div>
              <div>
                <h4>Progreso de lectura:</h4>
                <ProgressBar variant="warning" now={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoJuegos;
