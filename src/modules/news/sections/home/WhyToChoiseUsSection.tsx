import {
  ArrowTrendingUpIcon,
  BoltIcon,
  GlobeAltIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const WhyToChoiseUsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">¿Por qué elegir NewsApp?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Noticias Personalizadas",
            description: "Contenido adaptado a tus intereses",
            icon: UserPlusIcon,
          },
          {
            title: "Actualización en Tiempo Real",
            description: "Mantente informado al instante",
            icon: BoltIcon,
          },
          {
            title: "Cobertura Global",
            description: "Noticias de todo el mundo",
            icon: GlobeAltIcon,
          },
          {
            title: "Análisis en Profundidad",
            description: "Más allá de los titulares",
            icon: ArrowTrendingUpIcon,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="rounded-lg flex flex-col space-y-1.5 p-6 border bg-card text-card-foreground shadow-sm"
          >
            <header>
              <feature.icon className="h-8 w-8 mb-2 text-primary" />
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                {feature.title}
              </h3>
            </header>
            <main className="p-6">
              <p>{feature.description}</p>
            </main>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyToChoiseUsSection;
