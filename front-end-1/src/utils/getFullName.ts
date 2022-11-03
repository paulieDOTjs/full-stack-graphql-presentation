import { Maybe } from "@graphql-tools/utils";

type GetNameProps = (props: {
  firstName: Maybe<string>;
  lastName: Maybe<string>;
}) => string;

export const getFullName: GetNameProps = ({ firstName, lastName }) =>
  [firstName ?? false, lastName ?? false].filter((a) => !!a).join(" ");
