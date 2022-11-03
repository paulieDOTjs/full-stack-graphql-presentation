import { ArticlePage } from "../pages/ArticlePage/ArticlePage";
import { Routes as BRoutes, Navigate, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { useMemo } from "react";

export const ROUTES = {
  HOME: "/",
  ARTICLE: "/article",
} as const;

export const Pages = () => {
  const redirect = useMemo(() => {
    return <Navigate replace={true} to={ROUTES.HOME} />;
  }, []);

  return (
    <BRoutes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ARTICLE} element={<ArticlePage />} />

      <Route path="*" element={redirect} />
    </BRoutes>
  );
};
