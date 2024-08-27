"use client";
import Button from "@/modules/core/ui/Button";
import CheckInput from "@/modules/core/ui/fields/CheckBox";
import Input from "@/modules/core/ui/fields/Input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import type { LoginFormValues } from "@/modules/login/types";
import { object, string } from "yup";
import { loginUser } from "@/modules/login/api/user";
import LoaderModal from "@/modules/core/ui/modals/LoaderModal";
import InvalidCredentialsError from "../../errors/InvalidCredentialsError";
import { useRouter } from "next/navigation";

const LoginUserForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleLogin = async (values: LoginFormValues) => {
    const { email, password, rememberMe } = values;

    try {
      const response = await loginUser({ email, password, rememberMe });
      if (!response.token) throw new InvalidCredentialsError();
      setError(null);
      router.push("/");
    } catch (e: unknown) {
      if (e instanceof InvalidCredentialsError)
        setError("Credenciales incorrectas.");
      else if (e instanceof Error) setError(e.message);
      else
        setError(
          "Ha Ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
        );
    }
  };

  const loginValidationSchema = object({
    email: string().required("Por favor, ingresa tu correo."),
    password: string()
      .min(8, "Tu contraseña debe de tener 8 o más caracteres.")
      .required("Por favor, ingresa tu contraseña."),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validationSchema={loginValidationSchema}
    >
      {({ isSubmitting, setFieldValue }) => (
        <>
          <Form className="space-y-5">
            {error && (
              <span className="text-sm text-danger-light dark:text-danger-dark">
                {error}
              </span>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Correo Electrónico
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                as={Input}
              />
              <ErrorMessage
                name="email"
                className="text-danger-light dark:text-danger-dark text-sm"
                component="span"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold">
                Contraseña
              </label>
              <div className="relative">
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <ErrorMessage
                  name="password"
                  className="text-danger-light dark:text-danger-dark text-sm"
                  component="span"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="size-6" />
                  ) : (
                    <EyeIcon className="size-6" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Field
                id="remember"
                type="checkbox"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("rememberMe", e.currentTarget.checked)
                }
                name="rememberMe"
                as={CheckInput}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Recordar mi sesión
              </label>
            </div>
            <Button className="w-full" disabled={isSubmitting} type="submit">
              Iniciar Sesión
            </Button>
          </Form>

          {isSubmitting && (
            <LoaderModal isOpen={isSubmitting} close={() => {}} />
          )}
        </>
      )}
    </Formik>
  );
};

export default LoginUserForm;
