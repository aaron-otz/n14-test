import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.pageName}>ANDAIA</div>
        <div>
          <button
            className={styles.exploreButton}
            onClick={() => router.push("/inicio")}
          >
            Explorar
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.centerContent}>
          <h1>A N D A I A</h1>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.createAccountButton}
              onClick={() => router.push("/crear-cuenta")}
            >
              Crear cuenta
            </button>
            <button
              className={styles.loginButton}
              onClick={() => router.push("/login")}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
