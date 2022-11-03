/* eslint-disable */
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  _FieldSet: any;
};

export type Article = {
  __typename?: 'Article';
  author: Maybe<Me | User>;
  body: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ArticleAddInput = {
  articleBody: Scalars['String'];
  articleTitle: Scalars['String'];
  myID: Scalars['String'];
};

export type ArticleUpdateInput = {
  articleBody: Scalars['String'];
  articleID: Scalars['String'];
  articleTitle: Scalars['String'];
  myID: Scalars['String'];
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

export type IUser = {
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Me = IUser & {
  __typename?: 'Me';
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  myArticles: Maybe<Array<Article>>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticle: Maybe<Article>;
  deleteArticle: Maybe<BasicResponse>;
  updateArticle: Maybe<Article>;
};


export type MutationAddArticleArgs = {
  articleInput: ArticleAddInput;
};


export type MutationDeleteArticleArgs = {
  articleID: Scalars['ID'];
};


export type MutationUpdateArticleArgs = {
  articleInput: ArticleUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  article: Maybe<Article>;
  me: Maybe<Me>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};

export type User = IUser & {
  __typename?: 'User';
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type _Service = {
  __typename?: '_Service';
  sdl: Maybe<Scalars['String']>;
};

export type ArticlePagePropsFragment = { __typename?: 'Article', id: string, title: string, body: string };

export type GetArticleDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetArticleDataQuery = { __typename?: 'Query', article: { __typename?: 'Article', id: string, title: string, body: string } | null | undefined };

export type HomePageMePropsFragment = { __typename?: 'Me', id: string, firstName: string | null | undefined, lastName: string | null | undefined, myArticles: Array<{ __typename?: 'Article', id: string, title: string }> | null | undefined };

export type GetHomePageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageDataQuery = { __typename?: 'Query', me: { __typename?: 'Me', id: string, firstName: string | null | undefined, lastName: string | null | undefined, myArticles: Array<{ __typename?: 'Article', id: string, title: string }> | null | undefined } | null | undefined };

type BasicResponse_BasicError_Fragment = { __typename: 'BasicError', message: string };

type BasicResponse_BasicSuccess_Fragment = { __typename: 'BasicSuccess', message: string };

export type BasicResponseFragment = BasicResponse_BasicError_Fragment | BasicResponse_BasicSuccess_Fragment;

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me: { __typename: 'Me', id: string } | null | undefined };
