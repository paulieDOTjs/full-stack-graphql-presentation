import { gql } from "apollo-server-core";

export const addressSchema = gql`
  extend type Me {
    defaultBillingAddress: Address
    defaultDeliveryAddress: Address
    myAddresses: [Address!]
  }

  type Address {
    id: ID!
    street: String
    city: String
    state: String
    zipCode: Int
    customer: IUser

    ordersDeliveredHere: [Order!]
    ordersBilledHere: [Order!]
  }
`;
