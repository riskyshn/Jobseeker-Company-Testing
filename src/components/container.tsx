interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className="w-full px-4">
      <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
