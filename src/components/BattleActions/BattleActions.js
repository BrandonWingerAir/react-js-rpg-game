import styles from './styles.module.css';

export const BattleActions = ({ onAttack, onAffect, onHeal }) => {
    return (
        <div className={styles.main}>
            <div onClick={onAttack} className={styles.option} >
                Claw Strike
            </div>
            <div onClick={onAffect} className={styles.option}>
                Throw Sand
            </div>
            <div onClick={onHeal} className={styles.option}>
                Self-Heal
            </div>
        </div>
    )
}