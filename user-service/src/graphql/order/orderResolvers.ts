import { ME_ID } from "../../config/ME_ID";
import { Resolvers } from "../../models/__generated__/graphql";
import { basicSuccess } from "../base/basicResponse";
import { prisma } from "../../db/prisma";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const someOperationToVerifySubtotal = (num: number) => true;

export const orderResolvers: Resolvers = {
  Mutation: {
    placeDeliveryOrder: (_, { orderInput }) => {
      if (someOperationToVerifySubtotal(orderInput.proposedSubtotal)) {
        const { paymentReceived, deliveryAddressId, itemIds, placedAt } =
          orderInput;

        return prisma.order.create({
          data: {
            userId: ME_ID,
            subtotal: orderInput.proposedSubtotal,
            deliveryMethod: "DELIVERY",
            paymentReceived,
            deliveryAddressId,
            itemIds,
            placedAt,
          },
        });
      } else {
        return {
          __typename: "BasicError",
          message: "Could not verify subtotal",
        };
      }
    },
    markOrderAsDelivered: async (_, { orderID, paymentReceived }) => {
      if (paymentReceived) {
        await prisma.order.update({
          where: { id: orderID },
          data: { deliveredAt: new Date(), paymentReceived },
        });
        return basicSuccess;
      } else {
        const order = await prisma.order.update({
          where: { id: orderID },
          data: { deliveredAt: new Date() },
        });
        if (order.paymentReceived) {
          return basicSuccess;
        }
        return {
          __typename: "BasicError",
          message: "Need to collect payment!",
        };
      }
    },
  },
  Me: {
    myOrders: (me) => prisma.order.findMany({ where: { userId: me.id } }),
  },
  Order: {
    customer: (order) => prisma.user.findFirst({ where: { id: order.userId } }),
    billingAddress: (order) =>
      order.billingAddressId
        ? prisma.address.findFirst({ where: { id: order.billingAddressId } })
        : null,
    deliveryAddress: (order) =>
      order.deliveryAddressId
        ? prisma.address.findFirst({ where: { id: order.deliveryAddressId } })
        : null,
  },
};
