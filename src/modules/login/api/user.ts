import axios, { AxiosError } from "axios";
import type { LoginFormValues, LoginResponse } from "@/modules/login/types";
import InvalidCredentialsError from "@/modules/login/errors/InvalidCredentialsError";
import EnviorementNotFoundError from "@/modules/login/errors/EnviorementNotFoundError";
import ServerError from "@/modules/login/errors/ServerError";

export const loginUser = async ({
  email,
  password,
}: LoginFormValues): Promise<LoginResponse> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new EnviorementNotFoundError("URL del backend no configurada.");
    }

    const response = await axios.post<LoginResponse>(
      `${backendUrl}/usuarios/login`,
      {
        correo: email,
        contra: password,
      }
    );

    return response.data;
  } catch (e) {
    if (e instanceof EnviorementNotFoundError) throw e;
    else if (e instanceof AxiosError) {
      if (e.response?.data === "Credenciales incorrectas")
        throw new InvalidCredentialsError();
      else if (e.response?.status === 500) throw new ServerError();

      throw new Error(
        "Error al comunicarse con el servidor, por favor, inténtalo de nuevo más tarde.."
      );
    } else if (e instanceof Error) throw new Error(e.message);
    else
      throw new Error(
        "Ha Ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
      );
  }
};
