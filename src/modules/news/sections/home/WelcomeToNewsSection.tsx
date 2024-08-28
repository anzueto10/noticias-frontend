import Button from "@/modules/core/ui/Button";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const WelcomeToNewsSection = () => {
  return (
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a NewsApp</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Tu fuente confiable de noticias e información actualizada
      </p>
      <Link href="/login">
        <Button size="lg" color="highlight" variant="secondary">
          Iniciar Seción <ArrowRightCircleIcon className="size-6" />
        </Button>
      </Link>
    </section>
  );
};

export default WelcomeToNewsSection;
