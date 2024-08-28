import axios, { AxiosError } from "axios";
import EnviorementNotFoundError from "@/modules/login/errors/EnviorementNotFoundError";
import ServerError from "@/modules/login/errors/ServerError";
import type { Category } from "../types";

export const getAllCategories = async (): Promise<Array<Category>> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl)
      throw new EnviorementNotFoundError("URL del backend no configurada.");

    const response = await axios.get(`${backendUrl}/clasificaciones`);
    const data: Array<Category> = response.data;
    return data;
  } catch (e) {
    if (e instanceof EnviorementNotFoundError) throw e;
    else if (e instanceof AxiosError) {
      if (e.response?.status === 500) throw new ServerError();
    } else if (e instanceof Error) throw new Error(e.message);
    else
      throw new Error(
        "Ha Ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
      );
    return [];
  }
};

export const getCategory = async ({
  categoryId,
}: {
  categoryId: number;
}): Promise<Category | undefined> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl)
      throw new EnviorementNotFoundError("URL del backend no configurada.");

    const response = await axios.get(
      `${backendUrl}/clasificaciones/${categoryId}`
    );
    const data: Category = response.data;
    return data;
  } catch (e) {
    if (e instanceof EnviorementNotFoundError) throw e;
    else if (e instanceof AxiosError) {
      if (e.response?.status === 500) throw new ServerError();
    } else if (e instanceof Error) throw new Error(e.message);
    else
      throw new Error(
        "Ha Ocurrido un error inesperado, por favor, inténtalo de nuevo más tarde."
      );
  }
};
