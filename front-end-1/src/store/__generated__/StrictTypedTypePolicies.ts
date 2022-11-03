/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ArticleKeySpecifier = ('author' | 'body' | 'id' | 'title' | ArticleKeySpecifier)[];
export type ArticleFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BasicErrorKeySpecifier = ('message' | BasicErrorKeySpecifier)[];
export type BasicErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BasicSuccessKeySpecifier = ('message' | BasicSuccessKeySpecifier)[];
export type BasicSuccessFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IUserKeySpecifier = ('email' | 'firstName' | 'id' | 'lastName' | 'username' | IUserKeySpecifier)[];
export type IUserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MeKeySpecifier = ('email' | 'firstName' | 'id' | 'lastName' | 'myArticles' | 'username' | MeKeySpecifier)[];
export type MeFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	myArticles?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addArticle' | 'deleteArticle' | 'updateArticle' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	updateArticle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_service' | 'article' | 'me' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_service?: FieldPolicy<any> | FieldReadFunction<any>,
	article?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'firstName' | 'id' | 'lastName' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ServiceKeySpecifier = ('sdl' | _ServiceKeySpecifier)[];
export type _ServiceFieldPolicy = {
	sdl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Article?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleKeySpecifier | (() => undefined | ArticleKeySpecifier),
		fields?: ArticleFieldPolicy,
	},
	BasicError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BasicErrorKeySpecifier | (() => undefined | BasicErrorKeySpecifier),
		fields?: BasicErrorFieldPolicy,
	},
	BasicSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BasicSuccessKeySpecifier | (() => undefined | BasicSuccessKeySpecifier),
		fields?: BasicSuccessFieldPolicy,
	},
	IUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IUserKeySpecifier | (() => undefined | IUserKeySpecifier),
		fields?: IUserFieldPolicy,
	},
	Me?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MeKeySpecifier | (() => undefined | MeKeySpecifier),
		fields?: MeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	_Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ServiceKeySpecifier | (() => undefined | _ServiceKeySpecifier),
		fields?: _ServiceFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;