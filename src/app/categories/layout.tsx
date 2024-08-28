const CategoriesLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <main className="w-full flex-grow flex-1 flex flex-col">{children}</main>
  );
};
export default CategoriesLayout;
