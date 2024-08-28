import Link from "next/link";

const WhyToJoinUsSection = () => {
  return (
    <section className="w-full max-w-md space-y-8">
      <article className="w-full max-w-md bg-background-light dark:bg-background-dark border p-6 rounded-lg shadow-sm space-y-6">
        <header>
          <h2>¿Por qué unirte a NewsApp?</h2>
        </header>
        <main>
          <ul className="list-disc list-inside space-y-2">
            <li>Acceso a noticias personalizadas según tus intereses</li>
            <li>Notificaciones en tiempo real de las últimas noticias</li>
            <li>Posibilidad de guardar artículos para leer más tarde</li>
            <li>Participar en discusiones con otros lectores</li>
            <li>Acceso a contenido exclusivo y análisis en profundidad</li>
          </ul>
        </main>
      </article>

      <article className="w-full max-w-md bg-background-light dark:bg-background-dark border p-6 rounded-lg shadow-sm space-y-6">
        <header>
          <h2>Noticias destacadas de hoy</h2>
        </header>
        <main>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Descubrimiento revolucionario en la lucha contra el cambio
                climático
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Nueva legislación impacta el mercado de criptomonedas
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Avances en inteligencia artificial prometen transformar la
                atención médica
              </Link>
            </li>
          </ul>
        </main>
      </article>
    </section>
  );
};

export default WhyToJoinUsSection;
