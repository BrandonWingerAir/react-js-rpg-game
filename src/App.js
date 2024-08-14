import { StartMenu } from './components/StartMenu/StartMenu';
import { useState } from 'react';
import './App.css';

export const App = () => {
  const [scene, setScene] = useState('start');

  return (
    <div className="App">
      {scene === 'start' && <StartMenu/>}
      {scene === 'battle' && <>Battle Mode</>}
      {scene === 'gameOver' && <>Game Over</>}
    </div>
  );
}

export default App;
