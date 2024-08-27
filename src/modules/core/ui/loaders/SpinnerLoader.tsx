const SpinnerLoader = () => {
  return (
    <div
      className="animate-spin inline-flex max-h-fit size-12 border-[3px] border-current border-t-transparent text-highlight rounded-full z-50"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default SpinnerLoader;
