import { useState } from 'react';
import './App.css';
import { StartScene, BattleScene, EndScene } from 'components';

export const App = () => {
  const [scene, setScene] = useState('start');
  const [winner, setWinner] = useState();

  return (
    <div className="App">
      {scene === 'start' && <StartScene onStartClick={() => setScene('battle')}/>}
      {scene === 'battle' && (
        <BattleScene 
          onGameEnd={winner => {
            setWinner(winner);
            setScene('gameEnd');
          }
        }/>
      )}
      {scene === 'gameEnd' && (
        <EndScene winner={winner} onStartClick={() => {
          setWinner(undefined);
          setScene('battle');
        }}/>
      )}
    </div>
  );
}