type MDXContainerProps = {
  children: JSX.Element;
};

const MDXContainer = ({ children }: MDXContainerProps): JSX.Element => {
  return (
    <div className="prose prose-slate prose-body prose-headings:text-yellow-300 dark:prose-invert">
      {children}
    </div>
  );
};

export default MDXContainer;
