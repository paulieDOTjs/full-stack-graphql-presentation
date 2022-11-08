import { Resolvers } from "../../models/__generated__/graphql";
import { prisma } from "../../db/prisma";

export const addressResolvers: Resolvers = {
  Me: {
    myAddresses: (me) => prisma.address.findMany({ where: { userId: me.id } }),
    defaultBillingAddress: (me) =>
      prisma.address.findFirst({ where: { id: me.defaultBillingAddressId } }),
    defaultDeliveryAddress: (me) =>
      prisma.address.findFirst({ where: { id: me.defaultDeliveryAddressId } }),
  },
  Address: {
    customer: (address) =>
      prisma.user.findFirst({ where: { id: address.userId } }),
    ordersBilledHere: (address) =>
      prisma.order.findMany({ where: { billingAddressId: address.id } }),
    ordersDeliveredHere: (address) =>
      prisma.order.findMany({ where: { deliveryAddressId: address.id } }),
  },
};
