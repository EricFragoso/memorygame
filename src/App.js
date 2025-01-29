import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './components/TelaInicial';
import TelaRegras from './components/TelaRegras';
import GameBoard from './components/GameBoard';
import GameBoardEasy from './components/GameBoardEasy';
import TelaVitoria from './components/TelaVitoria';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/regras" element={<TelaRegras />} />
        <Route path="/jogo" element={<GameBoard />} />
        <Route path="/jogofacil" element={<GameBoardEasy />} />
        <Route path="/vitoria" element={<TelaVitoria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;