import { useState } from 'react';
import styles from '../styles/PrayCard.module.scss';

export function PrayCard() {

    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Motivo de oração</h2>
                <p>Descrição da oração...</p>
            </div>
            <button
                className={`${active ? styles.checked : ''}`}
                onClick={toggleActive}
            >
                <img src="./icons/check.svg" alt="Check icon" />
            </button>
        </div>
    );
}