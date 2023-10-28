import React from 'react';

// Componente para la sección con la imagen y el texto
function ImageTextSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <ImageSide />
        <TextSide />
      </div>
    </section>
  );
}

// Componente para el lado de la imagen
function ImageSide() {
  return (
    <div className="relative z-10 lg:py-16">
      <div className="relative h-64 sm:h-80 lg:h-full">
        <img
          alt="House"
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1698529097/jaimemiranda_fkwg3a.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

// Componente para el lado del texto
function TextSide() {
  return (
    <div className="relative flex items-center bg-gray-100">
      <div className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></div>

      <div className="p-8 sm:p-16 lg:p-24">
        <h2 className="text-2xl text-black font-bold sm:text-3xl">
        Jaime Miranda Navarro
        </h2>
 
        <p className="mt-4 text-black">  Arquitecto -Urbanista <br/> UNIVERSIDADE BRANZ CUBAS - SAO PAULO, BRASIL <br/> jmiranda.aqestudios@gmail.com
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default ImageTextSection;
