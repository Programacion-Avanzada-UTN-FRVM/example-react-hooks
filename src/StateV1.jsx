import React, { useState } from "react";

function StateV1() {
  const [contador, setContador] = useState(0); // Iniciamos el estado con 0

  // Función para incrementar el contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  // Función para reiniciar el contador
  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div>
      <p>El contador está en: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={reiniciarContador}>Reiniciar</button>
    </div>
  );
}

export default StateV1;
