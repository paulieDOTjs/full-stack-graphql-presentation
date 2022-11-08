import { gql } from "apollo-server-core";

export const orderSchema = gql`
  extend type Me {
    myOrders: [Order!]
  }

  extend type Mutation {
    placeDeliveryOrder(orderInput: DeliveryOrderInput!): OrderPlacedResponse
    markOrderAsDelivered(orderID: ID!, paymentReceived: Boolean): BasicResponse
  }

  union OrderPlacedResponse = Order | BasicError

  input DeliveryOrderInput {
    proposedSubtotal: Float!
    paymentReceived: Boolean!
    deliveryAddressId: ID!
    itemIds: [String!]!
    placedAt: DateTime
  }

  enum DeliveryMethod {
    PICKUP
    DELIVERY
  }

  type Order {
    id: ID!
    subtotal: Float!
    placedAt: DateTime
    deliveredAt: DateTime
    customer: IUser

    paymentReceived: Boolean
    billingAddress: Address
    deliveryMethod: DeliveryMethod
    deliveryAddress: Address
  }
`;
