import React from 'react';

const ProjectPlanning = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Planificación y Desarrollo del Proyecto
          </h2>
          <p className="text-gray-600">
            Nuestra planificación detallada garantiza el éxito de tu proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectPlanningService
            title="Establecimiento de Objetivos"
            description="Definimos claramente los objetivos de tu proyecto para lograr resultados exitosos."
            link="/servicios/planificacion/objetivos"
          />
          <ProjectPlanningService
            title="Gestión de Plazos"
            description="Creamos un cronograma eficiente para cumplir con los plazos establecidos."
            link="/servicios/planificacion/plazos"
          />
          <ProjectPlanningService
            title="Control de Presupuesto"
            description="Gestionamos tu presupuesto de manera efectiva para evitar sobrecostos."
            link="/servicios/planificacion/presupuesto"
          />
          <ProjectPlanningService
            title="Identificación de Recursos"
            description="Analizamos los recursos necesarios y los asignamos de manera eficiente."
            link="/servicios/planificacion/recursos"
          />
          <ProjectPlanningService
            title="Evaluación de Riesgos"
            description="Identificamos y gestionamos los riesgos para minimizar impactos negativos."
            link="/servicios/planificacion/riesgos"
          />
          <ProjectPlanningService
            title="Informes de Progreso"
            description="Proporcionamos informes regulares sobre el estado del proyecto."
            link="/servicios/planificacion/informes"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectPlanningService = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a
        href={link}
        className="text-indigo-600 hover:underline mt-4 inline-block"
      >
        Más información
      </a>
    </div>
  );
};

export default ProjectPlanning;
