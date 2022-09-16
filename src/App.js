import "./App.css";

import { useState } from "react";

export default function App() {
  const [novaCor, setNovaCor] = useState("bg-vermelho");

  const alterarCor = () => {
    if (novaCor === "bg-vermelho") {
      setNovaCor("bg-azul");
    } else {
      setNovaCor("bg-vermelho");
    }
  };

  return (
    <div className="display">
      <div className="container">
        <h2>Altere o estilo do elemento</h2>
        <div className={novaCor}></div>
        <p>Clique no botão abaixo para alterar a cor do elemento.</p>
        <button onClick={alterarCor}>Clique aqui</button>
      </div>
    </div>
  );
}
