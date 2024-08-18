import styles from './styles.module.css';
import { PlayerSummary, BattleActions, BattleAnnouncer } from 'components';
import { useAIOpponent, useBattleSequence } from 'hooks';
import { useEffect, useState } from 'react';
import { userStats, opponentStats } from 'shared';

export const BattleScene = () => {
    const [sequence, setSequence] = useState({});

    const {
        turn,
        inSequence,
        userHealth,
        opponentHealth,
        announcerMessage,
        userAnimation,
        opponentAnimation
    } = useBattleSequence(sequence);

    const opponentChoice = useAIOpponent(turn);

    useEffect(() => {
        if (opponentChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: opponentChoice });
        }
    }, [turn, opponentChoice, inSequence]);

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
                            className={styles[userAnimation]}
                        />
                    </div>
                    
                    <div className={styles.opponentSprite}>
                        <img
                            src={opponentStats.img}
                            alt={opponentStats.name}
                            className={styles[opponentAnimation]}
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
                        onAttack={() => setSequence({ turn, mode: 'attack' })}
                        onAffect={() => setSequence({ turn, mode: 'magic' })}
                        onHeal={() => setSequence({ turn, mode: 'heal' })}
                    />
                </div>
            </div>

        </>
    );
}