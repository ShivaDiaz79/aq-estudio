import React from 'react';

const ProjectSupervision = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Supervisión de Proyecto
          </h2>
          <p className="text-gray-600">
            Garantizamos que tu proyecto se desarrolle según lo planificado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SupervisionService
            title="Control de Calidad"
            description="Aseguramos que los estándares de calidad se cumplan en cada etapa del proyecto."
            link="/servicios/supervision/calidad"
          />
          <SupervisionService
            title="Seguimiento de Plazos"
            description="Monitoreamos y mantenemos el proyecto en el camino correcto para cumplir con los plazos."
            link="/servicios/supervision/plazos"
          />
          <SupervisionService
            title="Gestión de Costos"
            description="Supervisamos los costos y evitamos sobrecostos en el proyecto."
            link="/servicios/supervision/costos"
          />
          <SupervisionService
            title="Coordinación de Equipos"
            description="Aseguramos una comunicación efectiva y coordinación entre los equipos de trabajo."
            link="/servicios/supervision/equipos"
          />
          <SupervisionService
            title="Control de Seguridad"
            description="Mantenemos un entorno seguro y cumplimos con todas las normativas de seguridad."
            link="/servicios/supervision/seguridad"
          />
          <SupervisionService
            title="Reportes y Comunicación"
            description="Proporcionamos informes regulares y una comunicación eficiente sobre el estado del proyecto."
            link="/servicios/supervision/reportes"
          />
        </div>
      </div>
    </section>
  );
};

const SupervisionService = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
    </div>
  );
};

export default ProjectSupervision;
