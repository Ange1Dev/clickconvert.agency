import Image from "next/image";
import React from "react";
import styles from "../css/footer.module.css";
import { FaBeer, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.icon}
        src="/icono.png"
        width={100}
        height={100}
        alt="Icono"
      />
      <h3>¿Tienes Algúna Duda?</h3>
      <p className={styles.consulta}>
        Si tienes alguna duda contáctanos a{" "}
        <b>clickconvert.agencydev@gmail.com</b>
      </p>
      <p>O mandanos un mensaje por nuestras redes sociales!</p>
      <ul>
        <li className={styles.item}>
          <a
            href="https://www.instagram.com/clickconvert.agency/"
            target="_blank"
          >
            <FaInstagram></FaInstagram>
          </a>
        </li>
      </ul>
      <hr className={styles.hr}></hr>
      <p>COPYRIGHT © 2023 ClickConvert - Todos los derechos reservados.</p>
    </footer>
  );
}
