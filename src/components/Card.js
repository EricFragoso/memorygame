import React from "react";
import { motion } from "framer-motion";

const Card = ({ value, isFlipped, onClick }) => {
  return (
    <motion.div
      className="relative w-[752px] h-[500px] cursor-pointer perspective"
      onClick={!isFlipped ? onClick : undefined}
    >
      <motion.div
        className={`absolute inset-0 w-full h-full rounded-lg`}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        initial={{ rotateY: 0 }} // Aparece virado inicialmente
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Frente da carta */}
        <div className="absolute inset-0 bg-white rounded-lg">
          <img
            src={`/images/cards/${value}.jpg`}
            alt={`Card ${value}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* Verso da carta */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-blue-500 rounded-lg"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        initial={{ rotateY: 180 }} // Inicialmente invisível
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/images/cards/verso.jpg"
          alt="Card Back"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
