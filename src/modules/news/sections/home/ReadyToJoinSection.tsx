import Button from "@/modules/core/ui/Button";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ReadyToJoinSection = () => {
  return (
    <section className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">¿Listo para unirte?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Regístrate ahora y obtén acceso completo a todas nuestras funciones.
      </p>
      <Link href="/signup">
        <Button size="lg" color="highlight" variant="secondary">
          Crear una cuenta gratis <ArrowRightCircleIcon className="size-6" />
        </Button>
      </Link>
    </section>
  );
};

export default ReadyToJoinSection;
