import * as React from "react";
import styles from "@/styles/CarritoPagina.module.css";

export default function Carrito() {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src="../images/logoAndaia.png" alt="Logo" />
            <span> ANDAIA </span>
          </div>
          <nav>
            <ul>
              <li>
                <a href="../Pagina principal/index-paginaPrin.html">
                  Productos
                </a>
              </li>
              <li>
                <a href="">WishList</a>
              </li>
              <li>
                <a href="">Perfil</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.containerCart}>
        <header>
          <div className={styles.titulo}>Lista de productos </div>
          <div className={styles.iconCart}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <span>0</span>
          </div>
        </header>
      </div>
      <div className={styles.cartTab}>
        <h1> Carrito de compras </h1>
        <div className={styles.listaCart}>
          <div className={styles.item}>
            <div className={styles.imagen}>
              <img src="../images/tops/1.5 sueteres/1.5.1.jpeg" alt="sueter" />
            </div>
            <div className={styles.nombre}>Sueter de lana</div>
            <div className={styles.precioTotal}>$300.00</div>
            <div className={styles.cantidad}>
              <span className={styles.menos}>-</span>
              <span>1</span>
              <span className={styles.mas}>+</span>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.close}> cerrar </button>
          <button className={styles.comprar}> comprar </button>
        </div>
      </div>
    </>
  );
}
