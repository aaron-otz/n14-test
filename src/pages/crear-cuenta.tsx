import Head from "next/head";
import styles from "@/styles/Crearcuenta.module.css";
import { useRouter } from "next/router";

export default function Crearcuenta() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header_container}>
        <div className={styles.page_name}>ANDAIA</div>
        <div className={styles.regresar_button_container}>
          <button
            className={styles.regresar_button}
            onClick={() => router.push("/")}
          >
            Regresar
          </button>
        </div>
      </header>
      <div className={styles.crearCuenta_container}>
        <h2>Crear cuenta</h2>
        <form
          action="#"
          method="POST"
          className={styles.crearCuenta_formulario}
        >
          {/* <!-- Nombre --> */}
          <div className={styles.formulario}>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          {/* <!-- Usuario --> */}
          <div className={styles.formulario}>
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>

          {/*  <!-- Correo electrónico --> */}
          <div className={styles.formulario}>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          {/* <!-- Contraseña --> */}
          <div className={styles.formulario}>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>

          {/* <!-- País --> */}
          <div className={styles.formulario}>
            <label for="country">País:</label>
            <select id="country" name="country" required>
              <option value="" disabled selected>
                Selecciona un país
              </option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
            </select>
          </div>

          {/* <!-- Número de teléfono --> */}
          <div className={styles.formulario}>
            <label for="phone">Número de teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]+"
              required
            />
          </div>

          {/* <!-- Botón de envío --> */}
          <div className={styles.formulario}>
            <button type="submit" className={styles.crearCuenta_button}>
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
