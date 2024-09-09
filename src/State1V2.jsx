import React, { useState } from "react";

function State1V2() {
  const [contador, setContador] = useState(0); // Iniciamos el estado con 0

  /**
   * Gestiona el click de un elemento en el DOM, especificamente para el contador unicamente.
   *
   * @param {string} accion La accion de clickeo.
   */
  const manejarClick = (accion) => {
    if (accion === "incrementar") {
      setContador(contador + 1);
    } else if (accion === "reiniciar") {
      setContador(0);
    }
  };

  return (
    <div>
      <p>El contador está en: {contador}</p>
      <button onClick={() => manejarClick("incrementar")}>Incrementar</button>
      <button onClick={() => manejarClick("reiniciar")}>Reiniciar</button>
    </div>
  );
}

export default State1V2;
