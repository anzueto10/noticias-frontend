class ServerError extends Error {
  status: number;
  constructor() {
    super(
      "Ha ocurrido un error en el servidor, por favor, inténtelo de nuevo más tarde."
    );
    this.status = 500;
  }
}

export default ServerError;
