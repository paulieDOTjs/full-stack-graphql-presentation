import { BasicError, BasicSuccess } from "../../models/__generated__/graphql";

export const basicSuccess: BasicSuccess = {
  __typename: "BasicSuccess",
  message: "Success!",
};

export const basicError: BasicError = {
  __typename: "BasicError",
  message: "Error!",
};
