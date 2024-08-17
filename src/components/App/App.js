import { useState } from 'react';
import './App.css';
import { StartScene, BattleScene } from 'components';

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