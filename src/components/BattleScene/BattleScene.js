import styles from './styles.module.css';
import { useState } from 'react';
import { PlayerSummary } from '../PlayerSummary/PlayerSummary';
import { BattleActions } from '../BattleActions/BattleActions';
import { userStats, opponentStats } from '../../shared/characters';

export const BattleScene = () => {
    const [userHealth, setUserHealth] = useState(userStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);

    return (
        <div className={styles.main}>
            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary 
                        name={userStats.name}
                        level={userStats.level}
                        health={userHealth}
                        maxHealth={userStats.maxHealth}
                    main/>
                </div>
            </div>

            <div className={styles.opponent}>
                <div className={styles.summary}>
                    <PlayerSummary 
                        name={opponentStats.name}
                        level={opponentStats.level}
                        health={opponentHealth}
                        maxHealth={opponentStats.maxHealth}
                    />
                </div>
            </div>

            <div className={styles.battleActions}>
                <BattleActions
                    onAttack={() => console.log('Attack')}
                    onAffect={() => console.log('Affect')}
                    onHeal={() => console.log('Heal')}
                />
            </div>
        </div>
    );
}