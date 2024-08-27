class InvalidCredentialsError extends Error {
  status: number;
  constructor() {
    super("Credenciales Incorrectas");
    this.status = 403;
  }
}

export default InvalidCredentialsError;
