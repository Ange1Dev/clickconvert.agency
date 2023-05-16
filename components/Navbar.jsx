import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../css/navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <li>
          <a className={styles.containericon}>
            <Image
              className={styles.icon}
              src="/icono.png"
              width={100}
              height={100}
              alt="Icono"
            />
            <span>Agency</span>
          </a>
        </li>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.active}`}>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/">Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/">Contacto</Link>
          </li>
        </ul>
        <Link href="/agendar">
          <button className={styles.button}>Agendar Reunion</button>
        </Link>
      </nav>
    </header>
  );
}
