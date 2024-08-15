import styles from './styles.module.css';
import { HealthBar } from '../HealthBar/HealthBar';

const red = '#821200';
const blue = '#1953cb';

export const PlayerSummary = ({ main = false, name, level, health, maxHealth }) => {
    return (
        <div 
            style={{ backgroundColor: main ? red : blue }} 
            className={styles.main}
        >
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.level}>Lv. {level}</div>
            </div>

            <div className={styles.health}>
                <HealthBar/>
            </div>
        </div>
    );
}