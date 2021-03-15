import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles/Profile.module.scss';

export default function Profile() {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(true);

    function toggleCollapsed() {
        setCollapsed(!collapsed);
    }

    function processLogout() {
        router.push('/Login');
    }

    return (
        <div className={styles.container}>

            <div
                className={`${styles.profile} ${collapsed ? styles.collapsed : ''}`}
                onClick={toggleCollapsed}
            >
                <button
                    className={collapsed ? styles.collapsed : ''}
                >
                    <img src="./icons/exit.svg" alt="Exit icon" />
                </button>
                <div>
                    <h1>Konrad</h1>
                    <img src="./icons/profile.svg" alt="Profile icon" />
                </div>
            </div>
            <div className={`${styles.menu} ${collapsed ? styles.collapsed : ''}`}>
                <a>Editar dados pessoais</a>
                <a onClick={processLogout}>Sair</a>
            </div>
        </div>
    );
}