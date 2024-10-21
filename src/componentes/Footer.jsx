import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Tigers Bank. Todos os direitos reservados.</p>
        <div className={styles.links}>
          <a href="/privacy" className={styles.link}>Política de Privacidade</a>
          <a href="/terms" className={styles.link}>Termos de Serviço</a>
          <a href="/contact" className={styles.link}>Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
