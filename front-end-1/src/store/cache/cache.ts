import PossibleTypesResultData from "../__generated__/PossibleTypesResultData";
import { InMemoryCache } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  possibleTypes: PossibleTypesResultData.possibleTypes,
});
