import styles from './styles.module.css';
import { useState } from 'react';
import { PlayerSummary, BattleActions, BattleAnnouncer } from 'components';
import { userStats, opponentStats } from 'shared';

export const BattleScene = () => {
    const [userHealth, setUserHealth] = useState(userStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
    const [announcerMessage, setAnnouncerMessage] = useState('');

    return (
        <>
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

            <div className={styles.characters}>
                <div className={styles.playerHeader}>
                    {userStats.name} vs. {opponentStats.name}
                </div>

                <div className={styles.playerImages}>
                    <div className={styles.userSprite}>
                        <img
                            src={userStats.img}
                            alt={userStats.name}
                        />
                    </div>
                    
                    <div className={styles.opponentSprite}>
                        <img
                            src={opponentStats.img}
                            alt={opponentStats.name}
                        />
                    </div>
                </div>
            </div>

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

            <div className={styles.battleWrapper}>
                <div className={styles.battleContainer}>
                    <BattleAnnouncer
                        message={announcerMessage || `What will ${userStats.name} do?`}
                    />
                </div>

                <div className={styles.battleContainer}>
                    <BattleActions
                        onAttack={() => console.log('Attack')}
                        onAffect={() => console.log('Affect')}
                        onHeal={() => console.log('Heal')}
                    />
                </div>
            </div>

        </>
    );
}