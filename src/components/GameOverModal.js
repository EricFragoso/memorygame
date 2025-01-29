import React from "react";
import { useNavigate } from "react-router-dom";

const GameOverModal = ({ status, onRestart }) => {

  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/"); // Redireciona para a tela inicial
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md text-center">
        <h2 className="text-2xl font-bold">
          {status === "win" && "Parabéns, você venceu!"}
          {status === "time" && "O tempo acabou!"}
          {status === "lives" && "Você perdeu todas as tentativas!"}
        </h2>
        <button
          onClick={handleRestart}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Jogar Novamente
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
