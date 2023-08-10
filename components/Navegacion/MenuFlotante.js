import React from "react";
import Link from "next/link";

const MenuFlotante = () => {
  return (
    <section className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
      <ul>
        <li>
          <Link
            href="/servicios/darquitectonico"
            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="font-semibold">Diseño Arquitectónico</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Implica la creación de planos, maquetas y representaciones
              visuales para definir la forma, distribución y aspecto estético
              del edificio. See considera tanto la funcionalidad de los espacios
              como su estética, asegurando que se cumplan las necesidades del
              cliente y las regulaciones locales.
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/servicios/planificacion"
            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="font-semibold">
              Planificación y Desarrollo del Proyecto
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Incluye establecer objetivos, plazos y presupuestos realistas.
              Conceptualización y Diseño Inicial, Análisis de Factibilidad,
              Diseño Detallado, Documentación y Permisos, Presupuesto y
              Cronograma.{" "}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/servicios/remodelaciones"
            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="font-semibold">Remodelaciones</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Transformar espacios existentes en ambientes completamente nuevos
              y funcionales. La importancia de equilibrar el respeto por la
              estructura original con las necesidades y deseos actuales.
              Soluciones creativas que optimicen el espacio, mejoren la
              funcionalidad y den vida. Desde la actualización de una cocina
              hasta la transformación de una vivienda antigua en una moderna
              obra maestra.
            </span>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            href="/servicios/construciones"
            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="font-semibold">Construciones</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Nos encargamos de gestionar todos los aspectos del proceso de
              construcción, desde la planificación y la obtención de permisos
              hasta la coordinación de los equipos de trabajo y la supervisión
              del trabajo en el lugar. Nuestra meta es garantizar que cada
              detalle del diseño se materialice con precisión y calidad. Desde
              la cimentación hasta los acabados finales.{" "}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/servicios/supervision"
            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="font-semibold">Supervisión de Construcción:</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              servicio vital para asegurar que el proyecto se construya de
              acuerdo con los planos y especificaciones. Se trabaja en conjunto
              con contratistas y subcontratistas para garantizar la calidad y la
              conformidad del trabajo. Esta supervisión puede abarcar desde la
              selección de materiales hasta la inspección final.
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/servicios/interiores"
            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="font-semibold">Diseño de Interiores</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Creación de espacios interiores atractivos y funcionales.Se pueden
              seleccionar y diseñar elementos como muebles, iluminación y
              acabados para crear un ambiente coherente y acogedor. Consideran
              tanto la estética como la comodidad de los ocupantes.
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MenuFlotante;
