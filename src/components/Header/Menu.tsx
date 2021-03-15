import { useState } from 'react';
import { Logo } from '../Shared/Logo';
import styles from './styles/Menu.module.scss';

export function Menu() {
    const [collapsed, setCollapsed] = useState(true);

    function toggleCollapsed() {
        setCollapsed(!collapsed);
    }

    return (
        <div className={styles.menu}>
            <button
                className={styles.menuButton}
                onClick={toggleCollapsed}
                type="button"
            >
                <div className={collapsed ? '' : styles.collapsed}></div>
                <div className={collapsed ? '' : styles.collapsed}></div>
            </button>
            <div className={`${styles.fullMenu} ${collapsed ? styles.collapsed : ''}`}>
                <ul>
                    <li>
                        <img src="./icons/add_circle.svg" alt="Add icon" />
                        Adicionar oração
                    </li>
                    <li>
                        <img src="./icons/pray_menu.svg" alt="Pray icon" />
                        Lista de orações
                    </li>
                    <li>
                        <img src="./icons/settings.svg" alt="Settings icon" />
                        Configurar notificações
                    </li>
                </ul>
                <Logo theme="light" size="big" />
            </div>
        </div>
    );
}