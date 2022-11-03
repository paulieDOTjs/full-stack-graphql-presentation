import classnames from "classnames";
import styles from "./Header.module.scss";

type HeaderProps = JSX.IntrinsicElements["div"];

export const Header: React.FC<HeaderProps> = ({ className, ...rest }) => {
  return <div {...rest} className={classnames(className, styles.header)}></div>;
};
