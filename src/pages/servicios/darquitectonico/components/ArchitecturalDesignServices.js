import React from 'react';

const ArchitecturalDesignServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Diseño Arquitectónico</h2>
          <p className="text-gray-600">
            Nuestros servicios de diseño arquitectónico crean espacios inspiradores y funcionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArchitecturalDesignService
            title="Diseño de Residencias"
            description="Diseñamos casas personalizadas que reflejan tu estilo y necesidades."
          />
          <ArchitecturalDesignService
            title="Diseño de Edificios Comerciales"
            description="Creamos espacios comerciales atractivos y eficientes para tu negocio."
          />
          <ArchitecturalDesignService
            title="Diseño de Espacios Públicos"
            description="Transformamos áreas públicas en lugares agradables para la comunidad."
          />
          <ArchitecturalDesignService
            title="Diseño de Paisaje"
            description="Planificamos paisajes que complementan tu propiedad y entorno natural."
          />
          <ArchitecturalDesignService
            title="Diseño Sustentable"
            description="Incorporamos prácticas sostenibles en nuestros diseños para un mundo mejor."
          />
          <ArchitecturalDesignService
            title="Diseño de Interiores"
            description="Creamos interiores impresionantes que reflejan tu personalidad y estilo."
          />
        </div>
      </div>
    </section>
  );
};

const ArchitecturalDesignService = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ArchitecturalDesignServices;
