import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 ">
      <div className="container bg-orange-500 px-2 sm:mx-auto pb-10 rounded-3xl flex flex-wrap-reverse items-center justify-center">
        <div className="lg:w-1/2 lg:pl-24 md:pl-16 pl-0">
          <AboutUsInfo />
          <AboutUsCards />
        </div>
      </div>
    </section>
  );
};

const AboutUsInfo = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-4 m-2">
          Quiénes Somos
        </h2>
        <p className="text-white">
          {" "}
          Somos una empreesa Boliviana Fundada en la Ciudad de Santa Cruz de la
          Sierra, conformada por un equipo integro capacitado para la
          elaboracion dee proyectos arquitectonicos y civiles. <br /> Contamos
          con mas de 25 años de experiencia, nos destacamos por el compromiso de
          la excelencia, innovacioon y la sastifaccion del cliente.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-4 m-2">
          Estructura
        </h2>
        <p className="text-white">
          {" "}
          AQ ESTUDIOS SRL es una empresa legalmente registrada que cuenta con
          apoyo logistico de reecursos humanos, equipos y herramientas para cada
          una de las area y servicios <br />
        </p>
      </div>
    </>
  );
};

const AboutUsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AboutCard
        title="Experiencia"
        description="Tenemos más de 10 años de experiencia en la industria."
      />
      <AboutCard
        title="Equipo Talentoso"
        description="Nuestro equipo está compuesto por expertos en su campo."
      />
      <AboutCard
        title="Enfoque en el Cliente"
        description="Ponemos a nuestros clientes en primer lugar en todo lo que hacemos."
      />
    </div>
  );
};

const AboutCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUs;
