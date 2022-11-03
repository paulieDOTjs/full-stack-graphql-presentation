import classnames from "classnames";
import { GET_HOME_PAGE_DATA } from "./homePageQueries";
import {
  GetHomePageDataQuery,
  HomePageMePropsFragment,
} from "../../store/__generated__/graphql";
import { Link } from "@nextui-org/react";
import { LoadingOrError } from "../../components/LoadingOrError/LoadingOrError";
import { ROUTES } from "../../routing/Routes";
import { Link as RouterLink } from "react-router-dom";
import { getFullName } from "../../utils/getFullName";
import { useQuery } from "@apollo/client";

type HomePageProps = JSX.IntrinsicElements["div"];

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { data, loading, error } =
    useQuery<GetHomePageDataQuery>(GET_HOME_PAGE_DATA);

  return (
    <LoadingOrError loading={loading} error={error}>
      <HomePageDisplayLayer
        myArticles={data?.me?.myArticles}
        firstName={data?.me?.firstName}
        lastName={data?.me?.lastName}
        {...props}
      />
    </LoadingOrError>
  );
};

type HomePageDisplayLayerProps = Omit<HomePageMePropsFragment, "id"> &
  JSX.IntrinsicElements["div"];

export const HomePageDisplayLayer: React.FC<HomePageDisplayLayerProps> = ({
  firstName,
  lastName,
  myArticles,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={classnames(className)}>
      <h1>Welcome {getFullName({ firstName, lastName })}</h1>
      <h2>Your articles</h2>
      <ul>
        {myArticles?.map((article) => (
          <li key={article.id}>
            <Link
              as={RouterLink}
              to={ROUTES.ARTICLE + "?article=" + article.id}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
