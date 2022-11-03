import classnames from "classnames";
import { Loading } from "@nextui-org/react";
import { useMemo } from "react";

export type LoadingOrErrorError = boolean | string | Error | undefined;

export type LoadingAndError = {
  loading: boolean;
  error: LoadingOrErrorError;
};

export type LoadingOrErrorProps = {
  errorIndicator?: JSX.Element;
  loadingIndicator?: JSX.Element;
  className?: null | string;
  children: JSX.Element | undefined | null;
} & LoadingAndError;

export const LoadingOrError: React.FC<LoadingOrErrorProps> = ({
  loading,
  error,
  errorIndicator,
  className,
  loadingIndicator,
  children,
}) => {
  const theLoadingIndicator = useMemo(() => {
    if (loadingIndicator === undefined)
      return <Loading className={classnames(className)} />;
    return loadingIndicator;
  }, [className, loadingIndicator]);

  const theErrorIndicator = useMemo(() => {
    if (errorIndicator === undefined)
      return <h1 className={classnames(className)}>oops</h1>;
    return errorIndicator;
  }, [className, errorIndicator]);

  const display = useMemo(() => {
    if (error) return theErrorIndicator;
    if (loading) return theLoadingIndicator;
    return children ?? null;
  }, [children, error, loading, theErrorIndicator, theLoadingIndicator]);

  return display;
};
