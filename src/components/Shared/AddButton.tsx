import styles from './styles/AddButton.module.scss';

export function AddButton() {
    return (
        <button className={styles.add}>
            <img src="./icons/add.svg" alt="Add Icon" />
        </button>
    );
}