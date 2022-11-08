/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { UserType } from '../User';
import { OrderType } from '../Order';
import { AddressType } from '../Address';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  _Any: any;
  _FieldSet: any;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  customer?: Maybe<IUser>;
  id: Scalars['ID'];
  ordersBilledHere?: Maybe<Array<Order>>;
  ordersDeliveredHere?: Maybe<Array<Order>>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['Int']>;
};

export type BasicError = {
  __typename?: 'BasicError';
  message: Scalars['String'];
};

export type BasicResponse = BasicError | BasicSuccess;

export type BasicSuccess = {
  __typename?: 'BasicSuccess';
  message: Scalars['String'];
};

export enum DeliveryMethod {
  Delivery = 'DELIVERY',
  Pickup = 'PICKUP'
}

export type DeliveryOrderInput = {
  deliveryAddressId: Scalars['ID'];
  itemIds: Array<Scalars['String']>;
  paymentReceived: Scalars['Boolean'];
  placedAt?: InputMaybe<Scalars['DateTime']>;
  proposedSubtotal: Scalars['Float'];
};

export type IUser = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Me = IUser & {
  __typename?: 'Me';
  defaultBillingAddress?: Maybe<Address>;
  defaultDeliveryAddress?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  myAddresses?: Maybe<Array<Address>>;
  myOrders?: Maybe<Array<Order>>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  markOrderAsDelivered?: Maybe<BasicResponse>;
  placeDeliveryOrder?: Maybe<OrderPlacedResponse>;
  test?: Maybe<BasicResponse>;
};


export type MutationMarkOrderAsDeliveredArgs = {
  orderID: Scalars['ID'];
  paymentReceived?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPlaceDeliveryOrderArgs = {
  orderInput: DeliveryOrderInput;
};


export type MutationTestArgs = {
  message: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  billingAddress?: Maybe<Address>;
  customer?: Maybe<IUser>;
  deliveredAt?: Maybe<Scalars['DateTime']>;
  deliveryAddress?: Maybe<Address>;
  deliveryMethod?: Maybe<DeliveryMethod | `${DeliveryMethod}`>;
  id: Scalars['ID'];
  paymentReceived?: Maybe<Scalars['Boolean']>;
  placedAt?: Maybe<Scalars['DateTime']>;
  subtotal: Scalars['Float'];
};

export type OrderPlacedResponse = BasicError | Order;

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  me?: Maybe<Me>;
  test?: Maybe<BasicResponse>;
};

export type User = IUser & {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<AddressType>;
  BasicError: ResolverTypeWrapper<BasicError>;
  BasicResponse: ResolversTypes['BasicError'] | ResolversTypes['BasicSuccess'];
  BasicSuccess: ResolverTypeWrapper<BasicSuccess>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeliveryMethod: DeliveryMethod;
  DeliveryOrderInput: DeliveryOrderInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IUser: ResolverTypeWrapper<UserType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Me: ResolverTypeWrapper<UserType>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<OrderType>;
  OrderPlacedResponse: ResolversTypes['BasicError'] | ResolversTypes['Order'];
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<UserType>;
  _Any: ResolverTypeWrapper<Scalars['_Any']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']>;
  _Service: ResolverTypeWrapper<_Service>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: AddressType;
  BasicError: BasicError;
  BasicResponse: ResolversParentTypes['BasicError'] | ResolversParentTypes['BasicSuccess'];
  BasicSuccess: BasicSuccess;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  DeliveryOrderInput: DeliveryOrderInput;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IUser: UserType;
  Int: Scalars['Int'];
  Me: UserType;
  Mutation: {};
  Order: OrderType;
  OrderPlacedResponse: ResolversParentTypes['BasicError'] | ResolversParentTypes['Order'];
  Query: {};
  String: Scalars['String'];
  User: UserType;
  _Any: Scalars['_Any'];
  _FieldSet: Scalars['_FieldSet'];
  _Service: _Service;
};

export type ExtendsDirectiveArgs = { };

export type ExtendsDirectiveResolver<Result, Parent, ContextType = any, Args = ExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExternalDirectiveArgs = {
  reason?: Maybe<Scalars['String']>;
};

export type ExternalDirectiveResolver<Result, Parent, ContextType = any, Args = ExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type KeyDirectiveArgs = {
  fields: Scalars['_FieldSet'];
  resolvable?: Maybe<Scalars['Boolean']>;
};

export type KeyDirectiveResolver<Result, Parent, ContextType = any, Args = KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProvidesDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type ProvidesDirectiveResolver<Result, Parent, ContextType = any, Args = ProvidesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RequiresDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type RequiresDirectiveResolver<Result, Parent, ContextType = any, Args = RequiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TagDirectiveArgs = {
  name: Scalars['String'];
};

export type TagDirectiveResolver<Result, Parent, ContextType = any, Args = TagDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['IUser']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ordersBilledHere?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  ordersDeliveredHere?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicError'] = ResolversParentTypes['BasicError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicResponse'] = ResolversParentTypes['BasicResponse']> = {
  __resolveType: TypeResolveFn<'BasicError' | 'BasicSuccess', ParentType, ContextType>;
};

export type BasicSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicSuccess'] = ResolversParentTypes['BasicSuccess']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['IUser'] = ResolversParentTypes['IUser']> = {
  __resolveType: TypeResolveFn<'Me' | 'User', ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  defaultBillingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  defaultDeliveryAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  myAddresses?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  myOrders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  markOrderAsDelivered?: Resolver<Maybe<ResolversTypes['BasicResponse']>, ParentType, ContextType, RequireFields<MutationMarkOrderAsDeliveredArgs, 'orderID'>>;
  placeDeliveryOrder?: Resolver<Maybe<ResolversTypes['OrderPlacedResponse']>, ParentType, ContextType, RequireFields<MutationPlaceDeliveryOrderArgs, 'orderInput'>>;
  test?: Resolver<Maybe<ResolversTypes['BasicResponse']>, ParentType, ContextType, RequireFields<MutationTestArgs, 'message'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  billingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['IUser']>, ParentType, ContextType>;
  deliveredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  deliveryMethod?: Resolver<Maybe<ResolversTypes['DeliveryMethod']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paymentReceived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  placedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPlacedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderPlacedResponse'] = ResolversParentTypes['OrderPlacedResponse']> = {
  __resolveType: TypeResolveFn<'BasicError' | 'Order', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  test?: Resolver<Maybe<ResolversTypes['BasicResponse']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export type _ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = {
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  BasicError?: BasicErrorResolvers<ContextType>;
  BasicResponse?: BasicResponseResolvers<ContextType>;
  BasicSuccess?: BasicSuccessResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IUser?: IUserResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderPlacedResponse?: OrderPlacedResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _FieldSet?: GraphQLScalarType;
  _Service?: _ServiceResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  extends?: ExtendsDirectiveResolver<any, any, ContextType>;
  external?: ExternalDirectiveResolver<any, any, ContextType>;
  key?: KeyDirectiveResolver<any, any, ContextType>;
  provides?: ProvidesDirectiveResolver<any, any, ContextType>;
  requires?: RequiresDirectiveResolver<any, any, ContextType>;
  tag?: TagDirectiveResolver<any, any, ContextType>;
};
