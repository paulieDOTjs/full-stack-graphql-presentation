import classnames from "classnames";
import {
  ArticlePagePropsFragment,
  GetArticleDataQuery,
  GetArticleDataQueryVariables,
} from "../../store/__generated__/graphql";
import { GET_ARTICLE_DATA } from "./articlePageQueries";
import { LoadingOrError } from "../../components/LoadingOrError/LoadingOrError";
import { ROUTES } from "../../routing/Routes";
import { useEffect, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useParamHandler } from "../../utils/customHooks/useParamHandler";

type ArticlePageProps = JSX.IntrinsicElements["div"];

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const [articleID] = useParamHandler("article");
  const [runQuery, { data, loading, error, called }] = useLazyQuery<
    GetArticleDataQuery,
    GetArticleDataQueryVariables
  >(GET_ARTICLE_DATA);
  const navigate = useNavigate();

  useEffect(() => {
    if (articleID && !called) {
      runQuery({ variables: { id: articleID } });
    }
    if (articleID === null) {
      navigate(ROUTES.HOME);
    }
  }, [articleID, called, navigate, runQuery]);

  const noArticleFound = useMemo(() => !!data && !data.article, [data]);

  return (
    <LoadingOrError
      loading={loading || !called}
      error={error ?? noArticleFound}
    >
      {data?.article && (
        <ArticlePageDisplayLayer
          title={data.article.title}
          id={data.article.id}
          body={data?.article?.body}
          {...props}
        />
      )}
    </LoadingOrError>
  );
};

type ArticlePageDisplayLayerProps = ArticlePagePropsFragment &
  JSX.IntrinsicElements["div"];

export const ArticlePageDisplayLayer: React.FC<
  ArticlePageDisplayLayerProps
> = ({ id, title, body, className, ...rest }) => {
  return (
    <div {...rest} key={id} className={classnames(className)}>
      <h2>{title}</h2>
      {body.split("\n").map((p, i) => (
        <p key={id + i}>{p}</p>
      ))}
    </div>
  );
};
