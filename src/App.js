import "./App.css";

import { useState } from "react";

export default function App() {
  const corDaFonteVermelho = "bg-vermelho";
  const corDaFonteAzul = "bg-azul";

  const [estiloAtualizado, setEstiloAtualizado] = useState(true);

  const alterarCor = () => {
    setEstiloAtualizado(!estiloAtualizado);
  };

  return (
    <div className="display">
      <div className="container">
        <h2>Altere o estilo do elemento</h2>
        <div
          className={estiloAtualizado ? corDaFonteVermelho : corDaFonteAzul}
        ></div>
        <p>Clique no botÃ£o abaixo para alterar a cor do elemento.</p>
        <button onClick={alterarCor}>Clique aqui</button>
      </div>
    </div>
  );
}

