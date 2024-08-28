class UnathorizedError extends Error {
  status: number;
  constructor() {
    super("Cliente inautorizado.");
    this.status = 403;
  }
}
export default UnathorizedError;
