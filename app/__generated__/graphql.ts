/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Course = {
  __typename?: 'Course';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Menu = {
  __typename?: 'Menu';
  backgroundImage: Scalars['Int']['output'];
  courses: Array<Course>;
};

export type Query = {
  __typename?: 'Query';
  generateMenu: Menu;
  menus?: Maybe<Array<Maybe<Menu>>>;
  recipes: Array<Recipe>;
};


export type QueryGenerateMenuArgs = {
  recipes: Array<RecipeInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  directions: Scalars['String']['output'];
  ingredients: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type RecipeInput = {
  directions: Scalars['String']['input'];
  ingredients: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', name: string, ingredients: string, directions: string }> };

export type MenusQueryVariables = Exact<{ [key: string]: never; }>;


export type MenusQuery = { __typename?: 'Query', menus?: Array<{ __typename?: 'Menu', backgroundImage: number, courses: Array<{ __typename?: 'Course', name: string, description: string }> } | null> | null };

export type GenerateMenuQueryVariables = Exact<{
  recipes: Array<RecipeInput> | RecipeInput;
}>;


export type GenerateMenuQuery = { __typename?: 'Query', generateMenu: { __typename?: 'Menu', backgroundImage: number, courses: Array<{ __typename?: 'Course', name: string, description: string }> } };


export const RecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"directions"}}]}}]}}]} as unknown as DocumentNode<RecipesQuery, RecipesQueryVariables>;
export const MenusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Menus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"}}]}}]}}]} as unknown as DocumentNode<MenusQuery, MenusQueryVariables>;
export const GenerateMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GenerateMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipeInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recipes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"}}]}}]}}]} as unknown as DocumentNode<GenerateMenuQuery, GenerateMenuQueryVariables>;