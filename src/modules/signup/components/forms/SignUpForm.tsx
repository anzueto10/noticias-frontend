"use client";

import Button from "@/modules/core/ui/Button";
import CheckInput from "@/modules/core/ui/fields/CheckBox";
import Input from "@/modules/core/ui/fields/Input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import { SignUpInitialValues } from "../../types";
import { number, object, string } from "yup";
import LoaderModal from "@/modules/core/ui/modals/LoaderModal";
import InvalidAcceptTherms from "../../errors/InvalidAcceptThemrsError";
import { registerUser } from "../../api/registerUser";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (values: SignUpInitialValues) => {
    const { acceptTerms } = values;
    try {
      if (!acceptTerms) throw new InvalidAcceptTherms();
      const user = await registerUser(values);
      if (user) router.push("/login/");
    } catch (e) {
      if (e instanceof InvalidAcceptTherms) {
        setError(e.message);
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(
          "Ha ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
        );
      }
    }
  };

  const initialValues: SignUpInitialValues = {
    acceptTerms: false,
    age: 0,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  const signUpValidationSchema = object({
    email: string().required("Por favor, ingresa tu correo."),
    password: string()
      .min(8, "Tu contraseña debe de tener 8 o más caracteres.")
      .required("Por favor, ingresa tu contraseña."),
    firstName: string().required("Por favor, ingresa tu primer nombre."),
    lastName: string().required("Por favor, ingresa tu primer nombre."),
    age: number()
      .min(
        15,
        "Debes de tener al menos 15 años para ingresar a esta aplicación"
      )
      .required("Por favor, ingrese una edad."),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <>
          <Form className="space-y-4">
            {error && (
              <p className="text-sm text-danger-light dark:text-danger-dark">
                {error}
              </p>
            )}
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-semibold">
                Primer Nombre
              </label>

              <Field
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Juan"
                as={Input}
              />
              <ErrorMessage
                name="firstName"
                className="text-danger-light dark:text-danger-dark text-sm"
                component="span"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-semibold">
                Apellido
              </label>

              <Field
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Rodrigo"
                as={Input}
              />
              <ErrorMessage
                name="lastName"
                className="text-danger-light dark:text-danger-dark text-sm"
                component="span"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Correo Electrónico
              </label>
              <Field
                id="email"
                type="text"
                name="email"
                placeholder="juan@gmail.com"
                as={Input}
              />
              <ErrorMessage
                name="email"
                className="text-danger-light dark:text-danger-dark text-sm"
                component="span"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="age" className="text-sm font-semibold">
                Edad
              </label>
              <Field id="age" type="number" name="age" as={Input} />
              <ErrorMessage
                name="age"
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
                id="acceptTerms"
                type="checkbox"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("acceptTerms", e.currentTarget.checked)
                }
                name="acceptTerms"
                as={CheckInput}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acepto los términos y condiciones
              </label>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Crear cuenta
            </Button>
          </Form>
          {isSubmitting && (
            <LoaderModal close={() => {}} isOpen={isSubmitting} />
          )}
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;
