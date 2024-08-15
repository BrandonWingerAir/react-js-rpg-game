import styles from './styles.module.css';
import { useState } from 'react';
import { PlayerSummary } from '../PlayerSummary/PlayerSummary';
import { userStats, opponentStats } from '../../shared/characters';

export const BattleScene = () => {
    const [userHealth, setUserHealth] = useState(userStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);

    return (
        <div className={styles.main}>
            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary 
                        health={userHealth}
                    main/>
                </div>
            </div>
            <div className={styles.opponent}>
                <div className={styles.summary}>
                    <PlayerSummary health={opponentHealth}/>
                </div>
            </div>
        </div>
    );
}