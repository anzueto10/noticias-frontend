class CategoryDoesNotExitsError extends Error {
  constructor() {
    super("Category does not exits.");
  }
}
export default CategoryDoesNotExitsError;
