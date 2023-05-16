import Image from "next/image";
import React from "react";
import styles from "../css/services.module.css";

export default function Services() {
  const content = [
    {
      id: 1,
      content: "Estrategias Personalizadas",
      image: "note.png",
      description:
        "En clickconvert analizamos a nuestros clientes y damos estrategias de marketing espcializadas para cada cliente",
    },
    {
      id: 2,
      content: "Pagas a base a resultados",
      image: "wallet.png",
      description:
        "En clickconvert analizamos a nuestros clientes y damos estrategias de marketing espcializadas para cada cliente",
    },
    {
      id: 3,
      content: "Procesos profesionales",
      image: "verified.png",
      description:
        "En clickconvert tenemos procesos profesionales y de alta calidad, buscamos ser lo más profesionales en lo que hacemos.",
    },
    {
      id: 4,
      content: "Estrategias Personalizadas",
      image: "note.png",
      description:
        "En clickconvert analizamos a nuestros clientes y damos estrategias de marketing espcializadas para cada cliente",
    },
    {
      id: 5,
      content: "Pagas a base a resultados",
      image: "wallet.png",
      description:
        "En clickconvert analizamos a nuestros clientes y damos estrategias de marketing espcializadas para cada cliente",
    },
    {
      id: 6,
      content: "Procesos profesionales",
      image: "verified.png",
      description:
        "En clickconvert tenemos procesos profesionales y de alta calidad, buscamos ser lo más profesionales en lo que hacemos.",
    },
    // Agrega más elementos según tus necesidades
  ];
  return (
    <div className={styles.services}>

      <Image
        src="/lineargradient.png"
        className={styles.gradient4}
        width={300}
        height={300}
        alt="linear-gradient"
      ></Image>

      <h3 className={styles.title}>Servicios</h3>
      <p className={styles.desc}>
        Te ayudamos a mejorar tus campañas publicitarias y a aumentar la
        conversión de tus sitios web
      </p>
      <div className={styles.cards}>
        {content.map((item) => (
          <div key={item.id}>
            <span>
              <Image
                src={`/about/${item.image}`}
                width={50}
                height={50}
                alt="Imagen"
              />
            </span>
            <h4>{item.content}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
