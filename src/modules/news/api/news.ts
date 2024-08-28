import axios, { AxiosError } from "axios";
import EnviorementNotFoundError from "@/modules/login/errors/EnviorementNotFoundError";
import ServerError from "@/modules/login/errors/ServerError";
import UnathorizedError from "@/modules/core/errors/UnathorizedError";
import { New } from "../types";

export const getAllNews = async ({
  token,
}: {
  token: string;
}): Promise<Array<New>> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new EnviorementNotFoundError("URL del backend no configurada.");
    }

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios.get(`${backendUrl}/noticias`, { headers });

    return response.data;
  } catch (e) {
    if (e instanceof EnviorementNotFoundError) throw e;
    else if (e instanceof AxiosError) {
      if (e.status === 403) throw new UnathorizedError();
      else if (e.response?.status === 500) throw new ServerError();
    } else if (e instanceof Error) throw new Error(e.message);
    else
      throw new Error(
        "Ha Ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
      );

    return [];
  }
};

export const getNew = async ({
  newId,
  token,
}: {
  newId: number;
  token: string;
}): Promise<New | undefined> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new EnviorementNotFoundError("URL del backend no configurada.");
    }

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios.get(`${backendUrl}/noticias/${newId}`, {
      headers,
    });

    return response.data;
  } catch (e) {
    if (e instanceof EnviorementNotFoundError) throw e;
    else if (e instanceof AxiosError) {
      if (e.status === 403) throw new UnathorizedError();
      else if (e.response?.status === 500) throw new ServerError();
    } else if (e instanceof Error) throw new Error(e.message);
    else
      throw new Error(
        "Ha Ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
      );
  }
};
