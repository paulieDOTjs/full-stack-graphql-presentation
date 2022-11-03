import classnames from "classnames";

type HeaderProps = JSX.IntrinsicElements["div"];

export const Header: React.FC<HeaderProps> = ({ className, ...rest }) => {
  return <div {...rest} className={classnames(className)}></div>;
};
