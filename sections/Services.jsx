import Image from "next/image";
import React from "react";
import styles from "../css/services.module.css";

export default function Services() {
  const content = [
    {
      id: 1,
      content: "Facebook Ads",
      image: "facebook.png",
      description:
        "Creamos, gestionamos y analizamos campañas de facebook ads.",
    },
    {
      id: 2,
      content: "Desarrollo de sitios webs",
      image: "page.png",
      description:
        "Desarrollamos páginas de aterrizajes e tiendas en linea",
    },
    {
      id: 3,
      content: "CRO",
      image: "points.png",
      description:
        "Optimizamos la tasa de conversion de tu ecommerce.",
    },
    {
      id: 4,
      content: "Email Marketing",
      image: "inbox.png",
      description:
        "Hacemos seguimiento de emails a clientes aumentando asi las ventas",
    },
    {
      id: 5,
      content: "Tiktok Ads",
      image: "tiktok.png",
      description:
        "Creamos anuncios con tipo de contenido especifico para generar trafico",
    },
    {
      id: 6,
      content: "Contenido UGC",
      image: "group.png",
      description:
        "Creamos un tipo de contenido efectivo",
    },
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
                src={`/servic/${item.image}`}
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
