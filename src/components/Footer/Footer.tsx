import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <h3>Encuéntranos en:</h3>
        <div className={styles.social_icons}>
          <a href="url_de_facebook">
            <img
              src="../images/social/facebook (1).png"
              alt="Facebook"
              width={50}
            />
          </a>
          <a href="url_de_twitter">
            <img src="../images/social/gorjeo.png" alt="Twitter" width={50} />
          </a>
          <a href="url_de_instagram">
            <img
              src="../images/social/instagram (1).png"
              alt="Instagram"
              width={50}
            />
          </a>
          <a href="url_de_gmail">
            <img src="../images/social/correo.png" alt="Gmail" width={50} />
          </a>
        </div>
      </div>
    </footer>
  );
}
