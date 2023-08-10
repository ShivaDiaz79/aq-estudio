import React, { useState, useEffect } from "react";
import Image from "next/image";

const Galery = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684035/Render_10_AQ_qjzok4.jpg",
      title: "Foto 0",
    },
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684032/Render_7_AQ_emnyai.jpg",
      title: "Foto 1",
    },
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684037/Render_8_AQ_oqzwvx.jpg",
      title: "Foto 2",
    },
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684029/Render_9_AQ_csuw7s.jpg",
      title: "Foto 3",
    },
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684028/Render_4_AQ_vtazv1.jpg",
      title: "Foto 4",
    },

    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684027/Render_3_AQ_rzy2l9.jpg",
      title: "Foto 6",
    },
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684027/Render_5_AQ_bk7fwq.jpg",
      title: "Foto 7",
    }, {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684024/Render_1_AQ_kdotz6.jpg",
      title: "Foto 8",
    }, 
    {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684023/Render_6_AQ_nrla8c.jpg",
      title: "Foto 9",
    }, {
      src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1691684017/Render_2_AQ_yyndmb.jpg",
      title: "Foto 10",
    }, 

    // Agregar más imágenes y títulos según tus necesidades
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]); // Agregamos images.length como dependencia del useEffect

  return (
    <div className=" bg-gray-800 flex flex-col items-center justify-center h-screen text-gray-800 ">
      <div className="relative w-full h-full">
      <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          width={1600}
          height={800}
          className="object-cover w-full h-full rounded-lg shadow-lg mb-4 " // Utilizar la clase object-cover para que la imagen cubra el contenedor
        />
      </div>
 
     
    </div>
  );
};
export default Galery;

