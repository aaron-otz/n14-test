import * as React from "react";
import styles from "@/styles/Producto.module.css";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { productos } from "@/utils/productos";

export default function Producto() {
  const params = useParams<{ id: string }>();
  const [producto, setProducto] = React.useState<(typeof productos)[0] | null>(
    null
  );

  React.useEffect(() => {
    const p = productos.find((product) => product.id === params.id) ?? null;
    setProducto(p);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src="../../images/logoAndaia.png" alt="Logo" />
            <span> ANDAIA </span>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="">Productos</a>
              </li>
              <li>
                <a href="">WishList</a>
              </li>
              <li>
                <a href="">Perfil</a>
              </li>
              <li>
                <a href="">Mi carrito</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${styles.small_container} ${styles.single_product}`}>
        <div className={styles.row}>
          <div className={styles.col_2}>
            <img src={producto?.img} width="100%" />
          </div>
          <div className={styles.col2}>
            <p> {producto?.categoria} </p>
            <h1> {producto?.nombre}</h1>

            <h3 className={styles.product_details_title}>
              {" "}
              Detalles del producto{" "}
            </h3>
            <p>{producto?.detalle}</p>

            <h4> ${producto?.precio} </h4>
            <select>
              <option> Tallas </option>
              <option> XXL </option>
              <option> XL </option>
              <option> L </option>
              <option> M </option>
              <option> S </option>
              <option> XS </option>
            </select>
            <input type="number" value="1" min="1" />
            <a href="" className={styles.button}>
              {" "}
              Añadir al carrito{" "}
            </a>
            <a href="" className={styles.button}>
              {" "}
              Comprar ahora{" "}
            </a>
          </div>
        </div>
      </div>
      <a href="javascript:history.back()" className={styles.back_button}>
        &#x2190; Volver
      </a>
    </>
  );
}
