class EmailAlredyUsedError extends Error {
  constructor() {
    super(
      "El correo electrónico ingresado ya está en uso, por favor, ingrese otro."
    );
  }
}

export default EmailAlredyUsedError;
