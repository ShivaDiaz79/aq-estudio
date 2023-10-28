import React from 'react';

const RemodelingServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Remodelaciones</h2>
          <p className="text-gray-600">
            Transformamos tus espacios existentes en algo nuevo y emocionante.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RemodelingService
            title="Remodelación de Cocina"
            description="Diseñamos y remodelamos cocinas para una experiencia culinaria excepcional."
          />
          <RemodelingService
            title="Remodelación de Baños"
            description="Transformamos baños en oasis de relajación con diseños modernos y funcionales."
          />
          <RemodelingService
            title="Remodelación de Interiores"
            description="Reimaginamos tus espacios interiores para un ambiente más acogedor y contemporáneo."
          />
          <RemodelingService
            title="Remodelación de Exteriores"
            description="Diseñamos áreas al aire libre impresionantes para disfrutar del aire libre."
          />
          <RemodelingService
            title="Remodelación de Oficinas"
            description="Creamos entornos de trabajo inspiradores y funcionales para empresas."
          />
          <RemodelingService
            title="Remodelación de Viviendas"
            description="Renovamos viviendas para que se adapten a tus necesidades y estilo de vida."
          />
        </div>
      </div>
    </section>
  );
};

const RemodelingService = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default RemodelingServices;
