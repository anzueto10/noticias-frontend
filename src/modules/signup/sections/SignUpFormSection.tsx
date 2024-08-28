import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import Button from "@/modules/core/ui/Button";
import Facebook from "@/modules/core/icons/FacebookIcon";
import Twitter from "@/modules/core/icons/TwitterIcon";
import LinkedIn from "@/modules/core/icons/Linkedin";
import Link from "next/link";

const SignUpFormSection = () => {
  return (
    <section className="w-full max-w-md">
      <article className="w-full max-w-md bg-background-light dark:bg-background-dark border p-6 rounded-lg shadow-sm space-y-6">
        <header className="space-y-1">
          <h2 className="text-2xl font-bold">Crear una cuenta</h2>
          <p>Únete a nuestra comunidad de lectores informados</p>
        </header>
        <main>
          <SignUpForm />
        </main>
        <hr className="my-4" />
        <footer className="flex flex-col space-y-4">
          <div className="text-sm text-center">O regístrate con</div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Facebook className="size-6" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="size-6" />
            </Button>
            <Button variant="outline" size="icon">
              <LinkedIn className="size-6" />
            </Button>
          </div>
          <div className="text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Inicia sesión
            </Link>
          </div>
        </footer>
      </article>
    </section>
  );
};

export default SignUpFormSection;
