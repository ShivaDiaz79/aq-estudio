import React from 'react';

const InteriorDesignServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Diseño de Interiores
          </h2>
          <p className="text-gray-600">
            Ofrecemos una amplia variedad de servicios de diseño de interiores
            para dar vida a tus espacios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InteriorDesignService
            title="Diseño Moderno"
            description="Diseño de interiores contemporáneo y minimalista que utiliza líneas limpias y materiales modernos."
          />
          <InteriorDesignService
            title="Estilo Clásico"
            description="Diseño de interiores atemporal que combina elementos clásicos y elegantes."
          />
          <InteriorDesignService
            title="Diseño Industrial"
            description="Aprovechamos la estética industrial con espacios abiertos y acabados robustos."
          />
          <InteriorDesignService
            title="Diseño Ecológico"
            description="Enfoque sostenible en el diseño de interiores utilizando materiales ecológicos y eficiencia energética."
          />
          <InteriorDesignService
            title="Diseño Personalizado"
            description="Creamos diseños de interiores que se adaptan a tus gustos y necesidades específicas."
          />
          <InteriorDesignService
            title="Diseño de Espacios Comerciales"
            description="Diseñamos espacios comerciales atractivos y funcionales que maximizan la experiencia del cliente."
          />
        </div>
      </div>
    </section>
  );
};

const InteriorDesignService = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InteriorDesignServices;
