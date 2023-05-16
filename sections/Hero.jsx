import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../css/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image src="/lineargradient.png" className={styles.gradient1} width={300} height={300} alt="linear-gradient" ></Image>

      <div className={styles.left}>
        <div className={styles.containertitle}>
          <h2>Consigue resultados reales con</h2>
          <span>ClickConvert.</span>
        </div>
        <p>
          Somos una agencia de marketing digital enfocada en <b>ecommerce</b> a
          aumentar sus ventas!
        </p>
        <Link href="/agendar">
          Agendar Reunion
        </Link>
      </div>

      <div className={styles.right}>
        <Image
          src="/resultsofclientes.png"
          width={500}
          height={500}
          alt="resultados de clickconvert"
        ></Image>
      </div>
      <Image src="/lineargradient.png" className={styles.gradient2} width={300} height={300} alt="linear-gradient" ></Image>

    </div>
  );
}
