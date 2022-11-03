import {
  NavigateOptions,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export function useParamHandler(
  key: string,
  navigateOptions?: NavigateOptions
) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [handledParam, setHandledParam] = useState<string | null>();

  useEffect(() => {
    for (const query of searchParams.entries()) {
      if (query[0] === key || query[0].toLowerCase() === key.toLowerCase()) {
        setHandledParam(decodeURI(query[1]));
        return;
      }
    }
    setHandledParam(null);
  }, [key, searchParams]);

  const handleSetValue = useCallback(
    (value: null | string) => {
      const paramsObject: Record<string, string> = {};

      // repopulate existing queryParams and put into paramsObject
      for (const query of searchParams.entries()) {
        if (query[1].length > 0) {
          paramsObject[query[0]] = encodeURI(query[1]);
        }
      }

      if (value) {
        paramsObject[key] = value;
      } else if (paramsObject[key] && value === null) {
        delete paramsObject[key];
      } else return;

      const params = new URLSearchParams({
        ...paramsObject,
      }).toString();

      if (params.length === 0) {
        navigate(location.pathname, navigateOptions);
      }

      navigate(location.pathname + "?" + decodeURI(params), navigateOptions);
    },
    [key, location.pathname, navigate, navigateOptions, searchParams]
  );

  return [handledParam, handleSetValue] as [
    string | null | undefined,
    (str: string | null) => void
  ];
}
