import styles from './styles.module.css';
import { HealthBar } from '../HealthBar/HealthBar';

const red = '#821200';
const blue = '#1953cb';

export const PlayerSummary = ({ main = false, name, level, value, maxValue }) => {
    return (
        <div 
            style={{ backgroundColor: main ? red : blue }} 
            className={styles.main}
        >
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.label}>Lv. {level}</div>
            </div>

            <div className={styles.health}>
                <HealthBar label="HP" value={value} maxValue={maxValue}/>
            </div>
        </div>
    );
}