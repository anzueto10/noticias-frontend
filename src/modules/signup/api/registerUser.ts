import axios from "axios";
import { SignUpInitialValues } from "../types";
import { AxiosError } from "axios";
import EnviorementNotFoundError from "@/modules/login/errors/EnviorementNotFoundError";
import ServerError from "@/modules/login/errors/ServerError";
import type { User } from "@/modules/core/types";
import EmailAlreadyUsedError from "../errors/EmailUsedError";

export const registerUser = async (
  values: SignUpInitialValues
): Promise<User> => {
  const { age, email, firstName, lastName, password } = values;
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new EnviorementNotFoundError("URL del backend no configurada.");
    }

    const response = await axios.post<User>(`${backendUrl}/usuarios/register`, {
      correo: email,
      edad: age,
      contra: password,
      nombre: firstName,
      apellido: lastName,
    });

    return response.data;
  } catch (e) {
    if (e instanceof EnviorementNotFoundError) throw e;
    else if (e instanceof AxiosError) {
      if (
        e.response?.status === 400 &&
        e.response.data.mensaje === "El correo ya está en uso"
      ) {
        throw new EmailAlreadyUsedError();
      }
      if (e.response?.status === 500) throw new ServerError();

      throw new Error(
        "Error al comunicarse con el servidor, por favor, inténtalo de nuevo más tarde."
      );
    } else if (e instanceof Error) throw new Error(e.message);
    else
      throw new Error(
        "Ha ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
      );
  }
};
