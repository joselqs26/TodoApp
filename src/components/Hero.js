import React from "react";

import "../styles/index.css";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div id="Hero" className="Hero-container">
      <div className="Hero-title">
        <div className="separator"></div>
        <h3 className="H3">Sobre la App</h3>
        <div className="separator"></div>
      </div>
      <div className="Hero-text-container">
        <p className="text">
            La app te permitirá listar y crear tareas, marcarlas como completadas, 
            eliminarlas y buscarlas. El sistema también te anunciará si existe una 
            actualización en otra pestaña <br /><br />
            Esta aplicación ha sido creada usando la tecnología de React y el LocalStorage. Su fin es
            meramente práctico y por el placer de programar. <br /><br />
            Si te interesa mi trabajo contactame ;)
        </p>
      </div>
    </div>
  );
};

export { Hero };
