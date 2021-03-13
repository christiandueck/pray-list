import { Menu } from './Menu';
import { Profile } from './Profile';

import styles from '../styles/Header.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <Menu />
            <Profile />
        </header>
    );
}