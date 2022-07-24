type PageHeaderProps = {
  title: string | JSX.Element;
  description?: string | JSX.Element;
  children?: JSX.Element;
};

const PageHeader = ({
  title,
  description,
  children,
}: PageHeaderProps): JSX.Element => {
  return (
    <div className="mb-20 mt-4">
      <h1 className="mb-4 text-4xl font-bold text-yellow-400">{title}</h1>
      {description && (
        <p className="font-semibold text-slate-900 dark:text-slate-300">
          {description}
        </p>
      )}
      {children && <div>{children}</div>}
    </div>
  );
};

export default PageHeader;
