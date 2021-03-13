import styles from '../styles/Profile.module.scss';

export function Profile() {
    return (
        <div className={styles.container}>
            <h1>Konrad</h1>
            <img src="./icons/profile.svg" alt="Profile icon" />
        </div>
    );
}