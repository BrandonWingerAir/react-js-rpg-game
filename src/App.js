import { useState } from 'react';
import './App.css';
import { StartScene } from './components/StartScene/StartScene';
import { BattleScene } from './components/BattleScene/BattleScene';

export const App = () => {
  const [scene, setScene] = useState('start');

  return (
    <div className="App">
      {scene === 'start' && <StartScene onStartClick={() => setScene('battle')}/>}
      {scene === 'battle' && <BattleScene/>}
      {scene === 'gameOver' && <>Game Over</>}
    </div>
  );
}

export default App;