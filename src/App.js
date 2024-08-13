import { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState('start');

  return (
    <div className="App">
      {mode === 'start' && <>Start Menu</>}
      {mode === 'battle' && <>Battle Scene</>}
      {mode === 'gameOver' && <>Game Over</>}
    </div>
  );
}

export default App;
