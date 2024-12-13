"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carrousel = () => {
  // Lista de imágenes del carrusel
  const images = [
    { src: "/kardian", alt: "Kardian" },
    { src: "/arkana.jpg", alt: "Arkana" },
    { src: "/nueva_duster.jpg", alt: "Nueva Duster" },
    { src: "/koleos.jpg", alt: "Koleos" },
    { src: "/kwid.jpg", alt: "Kwid" },
    { src: "/logan.jpg", alt: "Logan" },
    { src: "/megane.jpg", alt: "Megane" },
    { src: "/oroch.jpg", alt: "Oroch" },
    { src: "/sandero.jpeg", alt: "Sandero" },
    { src: "/trafic.jpg", alt: "Trafic" },
    { src: "/alaskan.jpg", alt: "Alaskan" },
    { src: "/stepway.jpg", alt: "Stepway" },
    { src: "/kango.jpg", alt: "Kangoo" },
    { src: "/e-tech.jpg", alt: "Kwid E-Tech" },
    { src: "/master.jpg", alt: "Master" },
  ];
  // Estado para rastrear la imagen activa
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático de imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [images.length]);

  // Función para ir a la imagen anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a la siguiente imagen
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Botón izquierdo */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full z-10"
        onClick={handlePrev}
      >
        <Image src="/left.svg" width={24} height={24} alt="Prev" className="text-orange-500"/>
      </button>

      {/* Contenedor de imágenes */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: "auto",
          width: "100%",
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center"
              style={{ flexBasis: "100%" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón derecho */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 text-white p-3 rounded-full z-10"
        onClick={handleNext}
      >
        <Image src="/right.svg" width={24} height={24} alt="Next" />
      </button>
    </div>
  );
};

export default Carrousel;
