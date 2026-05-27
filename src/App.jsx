import { useState } from 'react'
import './App.css'

export default function App() {

  const [pantalla, setPantalla] = useState('');

  const botones = [
    '%', 'CE', 'C', '←',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '+/-', '0', '.', '+',
                     '='
  ];

  const manejarClick = (valor) => {

    if (valor === 'C') {
      setPantalla('');
      return;
    }

    if (valor === '=') {
      try {
        setPantalla(eval(pantalla).toString());
      } catch {
        setPantalla('Error');
      }
      return;
    }

    if (valor === '←') {
      setPantalla(pantalla.slice(0, -1));
      return;
    }

    setPantalla(pantalla + valor);
  };

  return (

    <div className="contenedor">

      <div className="calculadora">

        <div className="pantalla">
          {pantalla || '0'}
        </div>

        <div className="botones">

          {botones.map((boton, index) => (

            <button
              key={index}
              onClick={() => manejarClick(boton)}
              className={
                ['/', '*', '-', '+' , '='].includes(boton)
                  ? 'operador'
                  : ''
              }
            >
              {boton}
            </button>

          ))}

        </div>

      </div>

    </div>

  );
}