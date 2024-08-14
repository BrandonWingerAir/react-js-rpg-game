import styles from './styles.module.css';
import { PlayerSummary } from '../PlayerSummary/PlayerSummary';

export const BattleScene = () => {
    return (
        <div className={styles.main}>
            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary main/>
                </div>
            </div>
            <div className={styles.opponent}>
                <div className={styles.summary}>
                    <PlayerSummary/>
                </div>
            </div>
        </div>
    );
}