import { useState } from 'react';
import './App.css';
import { StartMenu } from './components/StartMenu/StartMenu';
import { BattleMenu } from './components/BattleMenu/BattleMenu';

export const App = () => {
  const [scene, setScene] = useState('start');

  return (
    <div className="App">
      {scene === 'start' && <StartMenu onStartClick={() => setScene('battle')}/>}
      {scene === 'battle' && <BattleMenu/>}
      {scene === 'gameOver' && <>Game Over</>}
    </div>
  );
}

export default App;