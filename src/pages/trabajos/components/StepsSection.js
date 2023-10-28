import React from 'react';

const Step = ({ stepNumber, title, descripción, imageUrl }) => (
  <div className="flex relative pb-12 md:flex-row flex-col">
    <div className="w-10 md:w-1 mt-9 bg-red-200 pointer-events-none"></div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
      {stepNumber}
    </div>
    <div className="flex-grow pl-4 bg-slate-200">
      <h2 className="font-medium title-font text-sm text-black mb-1 tracking-wider">{title}</h2>
      <div className="leading-relaxed text-left" style={{ whiteSpace: 'pre-line' }}>
        {descripción}
      </div>
    </div>
    
    <div className="md:h-64 w-64 h-64 md:w-auto sm:w-64 sm:h-64 mx-auto">
      <img
        src={imageUrl}
        alt="Imagen de fondo"
        className="w-full h-full object-cover object-center "
      />
    </div>
  </div>
);

const StepsSection = () => {
  const stepsData = [
    {
      stepNumber: 1,
      title: "PROYECTO, CONSULTORIA Y CONSTRUCCIÓN CAMARA FRIA - DBI S.R.L.",
      descripción: "Fecha del Proyecto: 05/2005 \n\nUbicación: Parque Industrial \n\nCosto del Presupuesto: $69,948.00\n\nSuperficie Construida: 635M2\n\nPropietario: DBI S.R.L.",
      imageUrl: "https://res.cloudinary.com/di1v23yy0/image/upload/v1698367550/Foto_de_perfil_de_Facebook_ftsriu.jpg",
    },
    {
      stepNumber: 2,
      title: "Título personalizado para el paso 2",
      descripción: "Fecha:.... \n\nUbicación:...... \n\nCosto del presupuesto:......\n\nSuperficie Construida:......\n\nPropietario:...",
      imageUrl: "https://res.cloudinary.com/di1v23yy0/image/upload/v1698367550/Foto_de_perfil_de_Facebook_ftsriu.jpg",
    },
    {
      stepNumber: 3,
      title: "Título personalizado para el paso 3",
      descripción: "Fecha:.... \n\nUbicación:...... \n\nCosto del presupuesto:......\n\nSuperficie Construida:......\n\nPropietario:...",
      imageUrl: "https://res.cloudinary.com/di1v23yy0/image/upload/v1698367550/Foto_de_perfil_de_Facebook_ftsriu.jpg",
    },
  ];

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-8 md:py-10 mx-auto">
        {stepsData.map((step, index) => (
          <Step
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            descripción={step.descripción}
            imageUrl={step.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;











