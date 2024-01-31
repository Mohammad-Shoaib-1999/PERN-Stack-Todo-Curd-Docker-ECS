
const Text = ({ size = "sm", children, ...rest }) => {
  const sizes = {
    xs: "text-xs leading-5",
    sm: "text-sm leading-6",
    md: "text-md leading-6",
    lg: "text-lg leading-7",
    xl: "text-xl leading-8",
    xxl: "text-2xl leading-9",
    xxxl: "text-3xl leading-10",
    huge: "text-4xl leading-11",
    xhuge: "text-5xl leading-12",
    xxhuge: "text-6xl leading-13",
  };

  const textSize = sizes[size] || sizes.sm;

  return (
    <span className={textSize} {...rest}>
      {children}
    </span>
  );
};

export default Text;
