import Image from "next/image";
import React from "react";
import styles from "../css/aboutme.module.css";

export default function Aboutme() {
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
    // Agrega más elementos según tus necesidades
  ];

  return (
    <div className={styles.aboutme}>
      <Image
        src="/lineargradient.png"
        className={styles.gradient1}
        width={300}
        height={300}
        alt="linear-gradient"
      ></Image>
      <h3 className={styles.title}>¿Por qué elegirnos?</h3>
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
