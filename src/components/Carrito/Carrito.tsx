import styles from "@/styles/Carrito.module.css";

export default function Carrito() {
  return (
    <>
      <div className={styles.containerCart}>
        <header className={styles.header}>
          <div className={styles.titulo}>Lista de productos </div>
        </header>
      </div>
      <div className={styles.cartTab}>
        <h1> Carrito de compras </h1>
        <div className={styles.listaCart}>
          <div className={styles.item}>
            <div className={styles.imagen}>
              <img src="../images/tops/1.5 sueteres/1.5.1.jpeg" alt="sueter" />
            </div>
            <div className={styles.nombre}>nombre</div>
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
