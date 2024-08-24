import SendMail from "../forms/SendMail";

const InformedFormSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mantente Informado
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
              Suscríbete a nuestro boletín para recibir las últimas noticias
              directamente en tu bandeja de entrada.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <SendMail />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformedFormSection;
