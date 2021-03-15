import styles from './styles/Logo.module.scss';

export function Logo({ theme, size }) {
    let logoTheme = styles.dark;
    let selectedSize = styles.big;

    switch (theme) {
        case 'light':
            logoTheme = styles.light;
            break;
        case 'medium':
            logoTheme = styles.medium;
            break;
        default:
            logoTheme = styles.dark;
    }

    switch (size) {
        case 'small':
            selectedSize = styles.small;
            break;
        default:
            selectedSize = styles.big;
    }

    return (
        <div className={`${logoTheme} ${selectedSize}`}>
            <img src="./icons/pray_logo_icon.svg" alt="Pray logo" />
            <p>Pray<span>list</span>
            </p>
        </div>
    );
}