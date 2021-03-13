import styles from '../styles/PrayTime.module.scss';
import { PrayCard } from './PrayCard';

const today = new Intl.DateTimeFormat(
    'pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}).format(new Date());

export function PrayTime() {
    return (
        <main className={styles.container}>
            <h1>{today.toString()}</h1>
            <p>É tempo de orar por esses motivos:</p>
            <PrayCard />
            <PrayCard />
            <PrayCard />
        </main>
    );
}