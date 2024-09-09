import React, { useState } from "react";

function State1() {
  /**
   * useState()
   *
   * El retorno de ejecutar la funcion `useState` es un `Array`.
   * Lo que hacemos al hacer `[contador, setContador]` es desestructurar ese array para obtener su primer y segundo elemento (en ese orden)
   * y asignarle el nombre que nosotros queremos a esos elementos.
   *
   * El primer elemento siempre es de tipo `any` o `T` y es el valor actual del estado.
   * El segundo elemento es una funcion que nos permite actualizar el estado.
   * 
   * Para mas sobre destructuracion
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */
  const [contador, setContador] = useState(0); // Iniciamos el estado con un valor 0, y hereda el tipo `number` por consecuencia.

  return (
    <div>
      <p>El contador está en: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

export default State1;
