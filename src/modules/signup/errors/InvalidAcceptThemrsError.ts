class InvalidAcceptTherms extends Error {
  constructor() {
    super("Por favor, acepte los términos y condiciones");
  }
}

export default InvalidAcceptTherms;
