import React from 'react';

const ConstructionServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Servicios de Construcción
          </h2>
          <p className="text-gray-600">
            Transformamos tus ideas en estructuras sólidas y funcionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConstructionService
            title="Construcción Residencial"
            description="Diseño y construcción de hogares personalizados para tu comodidad y estilo de vida. Nuestro enfoque en la construcción residencial es crear espacios que reflejen tus necesidades y gustos personales."
          />
          <ConstructionService
            title="Construcción Comercial"
            description="Edificios comerciales, oficinas y locales adaptados a tus necesidades comerciales. Nuestra experiencia en construcción comercial abarca desde pequeñas tiendas hasta complejos de oficinas de gran envergadura."
          />
          <ConstructionService
            title="Construcción Industrial"
            description="Estructuras industriales y fábricas que cumplen con estándares de calidad y seguridad. En la construcción industrial, priorizamos la eficiencia y la funcionalidad para ayudar a tu negocio a prosperar."
          />
          <ConstructionService
            title="Renovaciones y Remodelaciones"
            description="Transformamos y modernizamos espacios existentes para un nuevo propósito. Nuestro equipo de expertos en renovaciones puede revitalizar cualquier propiedad, desde hogares hasta locales comerciales."
          />
          <ConstructionService
            title="Gestión de Proyecto"
            description="Gestionamos y supervisamos proyectos de construcción desde la concepción hasta la finalización. Nuestra experiencia en gestión de proyectos garantiza un flujo de trabajo eficiente y resultados exitosos."
          />
          <ConstructionService
            title="Construcción Ecológica"
            description="Construimos estructuras sostenibles y respetuosas con el medio ambiente. Nuestra pasión por la construcción ecológica se refleja en cada proyecto, con un enfoque en la eficiencia energética y el uso de materiales sostenibles."
          />
        </div>
      </div>
    </section>
  );
};

const ConstructionService = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ConstructionServices;
