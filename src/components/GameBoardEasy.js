import React, { useState, useEffect } from "react";
import Card from "./Card";
import ParticleEffect from "./ParticleEffect";
import GameOverModal from "./GameOverModal";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const GameBoard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [attempts, setAttempts] = useState(8);
  const [timeLeft, setTimeLeft] = useState(105);
  const [status, setStatus] = useState("");
  const [showParticles, setShowParticles] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(true);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (!isPreviewing && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 0.1), 100);
      return () => clearInterval(timer);
    }
    if (timeLeft <= 0) {
      setStatus("time");
    }
  }, [isPreviewing, timeLeft]);

  const resetGame = () => {
    const cardValues = Array.from({ length: 10 }, (_, i) => i + 1);
    const shuffledCards = [...cardValues, ...cardValues]
    .map((value, index) => ({ 
      id: `card_${index}`, 
      value, 
      isFlipped: true 
    }))
    .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setAttempts(8);
    setTimeLeft(105);
    setStatus("");
    setShowParticles(false);
    setIsPreviewing(true);

    // Mostrar as cartas por 5 segundos antes de virar
    setTimeout(() => {
      const hiddenCards = shuffledCards.map((card) => ({
        ...card,
        isFlipped: false,
      }));
      setCards(hiddenCards);
      setIsPreviewing(false);
    }, 12000);
  };

  const handleCardClick = (cardId) => {
    const cardIndex = cards.findIndex(card => card.id === cardId);
    
    if (
      cardIndex !== -1 && 
      flippedCards.length < 2 && 
      !cards[cardIndex].isFlipped && 
      !isPreviewing
    ) {
      const updatedCards = cards.map((card) =>
        card.id === cardId ? { ...card, isFlipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);
  
      if (firstCard && secondCard) {
        if (firstCard.value === secondCard.value) {
          // Par correto
          setMatchedPairs(matchedPairs + 1);
          setShowParticles(true);
          setTimeout(() => setShowParticles(false), 1500);
        } else {
          // Par errado
          setTimeout(() => {
            const updatedCards = cards.map((card) =>
              flippedCards.includes(card.id) ? { ...card, isFlipped: false } : card
            );
            setCards(updatedCards);
            setAttempts((prev) => prev - 1);
          }, 1000);
        }
  
        setFlippedCards([]); // Resetar as cartas viradas após avaliar o par
      }
    }
  }, [flippedCards, cards, matchedPairs]);

  useEffect(() => {
    if (matchedPairs === 10) {
      setTimeout(() => {
        navigate('/vitoria');
      }, 1000); // Pequeno delay para mostrar o último par encontrado
    } else if (attempts === 0) {
      setStatus("lives");
    }
  }, [matchedPairs, attempts, navigate]);

  return (
    <div className="relative h-[2160px] w-[3840px] p-4"
      style={{
        backgroundImage: "url('/images/backgrounds/bgGeral.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Barra de progresso */}
      <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-[2160px] bg-blue-500"
          initial={{ width: "100%" }}
          animate={{ width: `${(timeLeft / 105) * 100}%` }}
          transition={{ duration: 0.1 }}
        ></motion.div>
      </div>

      {/* Indicador de erros */}
      <div className="flex justify-center my-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 mx-1 rounded-full ${
              i < 8 - attempts ? "bg-red-500" : "bg-green-500"
            }`}
          ></div>
        ))}
      </div>

      {/* Grade de cartas */}
      <motion.div
        className="grid grid-cols-5 gap-4 mt-2 h-[80%] bg-start bg-cover bg-center justify-center items-center max-w-4xl mx-auto"
        style={{
          backgroundSize: "3840px 2160px",
          gridTemplateRows: "repeat(4, 500px)",
          gridTemplateColumns: "repeat(5, 752px)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            value={card.value}
            isFlipped={card.isFlipped}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </motion.div>

      {/* Partículas e modal de fim de jogo */}
      {showParticles && <ParticleEffect trigger={showParticles} />}
      {status && <GameOverModal status={status} onRestart={resetGame} />}
    </div>
  );
};

export default GameBoard;
