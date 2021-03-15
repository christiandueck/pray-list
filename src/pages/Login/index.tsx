import Head from 'next/head';
import { useRouter } from 'next/router';
import { Logo } from '../../components/Shared/Logo';
import styles from './styles/Login.module.scss';

export default function Login() {
    const router = useRouter();

    function processLogin() {
        router.push('/');
    }

    return (
        <>
            <Head>
                <title>Praylist</title>
            </Head>

            <div className={styles.container}>
                <Logo theme="medium" size="big" />

                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="user">Usuário</label>
                        <input name="user" id="user" type="text" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Senha</label>
                        <input name="password" id="password" type="password" />
                    </div>

                    <button
                        type="button"
                        className={styles.primaryButton}
                        onClick={processLogin}
                    >
                        Entrar
                    </button>
                </form>

                <button type="button" className={styles.secondaryButton}>
                    Fazer cadastro
                </button>
            </div>
        </>
    );
}