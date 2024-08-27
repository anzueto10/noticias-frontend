import Button from "@/modules/core/ui/Button";
import LoginUserForm from "../components/forms/LoginUserForm";
import Link from "next/link";
import { LOGIN_EXTERNAL_PROVIDERS } from "../constants";

const LoginSection = () => {
  return (
    <article className="w-full max-w-md bg-background-light dark:bg-background-dark border p-6 rounded-lg shadow-sm space-y-6">
      <header className="space-y-1">
        <h3 className="text-2xl font-bold">Iniciar Sesión</h3>
        <p className="text-sm text-muted-foreground-light dark:text-muted-foreground-dark">
          Ingresa a tu cuenta para personalizar tu experiencia de noticias
        </p>
      </header>
      <main className="space-y-4">
        <LoginUserForm />
        <div className="text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-highlight hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </main>
      <hr className="my-4" />
      <footer className="flex flex-col space-y-4">
        <div className="text-sm text-center">O inicia sesión con</div>
        <div className="flex justify-center space-x-4">
          {Object.entries(LOGIN_EXTERNAL_PROVIDERS).map(([index, { Icon }]) => (
            <Button variant="outline" size="icon" key={index}>
              <Icon className="size-6" />
            </Button>
          ))}
        </div>
        <div className="text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <Link href="/signup" className="text-highlight hover:underline">
            Regístrate
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default LoginSection;
