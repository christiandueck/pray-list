import { useState } from 'react';
import styles from './styles/PrayCard.module.scss';

export default function PrayCard() {
    const [active, setActive] = useState(false);
    const [collapsed, setCollapsed] = useState(true);

    function toggleActive() {
        setActive(!active);
    }

    function toggleCollapsed() {
        setCollapsed(!collapsed);
    }

    return (
        <div className={`${styles.container} ${collapsed && styles.collapsed}`}>
            <div
                className={`${styles.content} ${collapsed && styles.collapsed}`}
                onClick={toggleCollapsed}
            >
                <h2>Motivo de oração</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eum nihili facit; Invidiosum nomen est, infame, suspectum. Quid adiuvas.</p>
            </div>
            <div className={styles.buttons}>
                <button
                    className={`${active ? styles.checked : ''}`}
                    onClick={toggleActive}
                >
                    <img src="./icons/check.svg" alt="Check icon" />
                </button>
                <button
                    className={`${collapsed ? styles.collapsed : ''}`}
                >
                    <img src="./icons/edit.svg" alt="Check icon" />
                </button>
            </div>
        </div>
    );
}