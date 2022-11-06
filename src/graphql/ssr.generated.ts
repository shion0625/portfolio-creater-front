import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetUserQuery = { user: { id: string, is_admin: boolean, name: string, email: string, works?: { pageInfo: { page: number, hasNextPage: boolean, count: number, totalCount: number, paginationLength: number, hasPreviousPage: boolean }, nodes: Array<{ id: string, title: string, summary?: string | null, image_url?: string | null, duration?: string | null, number_of_people?: number | null, language?: string | null, role?: string | null, url?: string | null, brief_story?: string | null }> } | null } };

export type GetUsersQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetUsersQuery = { users: { pageInfo: { page: number, paginationLength: number, hasNextPage: boolean, hasPreviousPage: boolean, count: number, totalCount: number }, nodes: Array<{ id: string, name: string, works?: { nodes: Array<{ id: string, title: string, summary?: string | null, image_url?: string | null, duration?: string | null, number_of_people?: number | null, language?: string | null, role?: string | null, url?: string | null, brief_story?: string | null, user: { id: string, name: string } }> } | null }> } };

export type GetUsersNameQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetUsersNameQuery = { users: { pageInfo: { page: number, paginationLength: number, hasNextPage: boolean, hasPreviousPage: boolean, count: number, totalCount: number }, nodes: Array<{ id: string, name: string }> } };

export type GetUserIdsQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetUserIdsQuery = { users: { nodes: Array<{ id: string }> } };

export type CreateUserMutationVariables = Types.Exact<{
  input: Types.CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { id: string, name: string } };

export type GetWorkQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetWorkQuery = { work?: { id: string, title: string, summary?: string | null, image_url?: string | null, duration?: string | null, number_of_people?: number | null, language?: string | null, role?: string | null, url?: string | null, brief_story?: string | null, user: { id: string, name: string } } | null };

export type GetWorksQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetWorksQuery = { works: { pageInfo: { page: number, paginationLength: number, hasPreviousPage: boolean, hasNextPage: boolean, count: number, totalCount: number }, nodes: Array<{ id: string, title: string, summary?: string | null, image_url?: string | null, duration?: string | null, number_of_people?: number | null, language?: string | null, role?: string | null, url?: string | null, brief_story?: string | null, user: { id: string, name: string } }> } };


export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    id
    is_admin
    name
    email
    works {
      pageInfo {
        page
        hasNextPage
        count
        totalCount
        paginationLength
        hasPreviousPage
      }
      nodes {
        id
        title
        summary
        image_url
        duration
        number_of_people
        language
        role
        url
        brief_story
      }
    }
  }
}
    `;
export const GetUsersDocument = gql`
    query GetUsers($limit: Int!, $offset: Int) {
  users(limit: $limit, offset: $offset) {
    pageInfo {
      page
      paginationLength
      hasNextPage
      hasPreviousPage
      count
      totalCount
    }
    nodes {
      id
      name
      works {
        nodes {
          id
          title
          summary
          image_url
          duration
          number_of_people
          language
          role
          url
          brief_story
          user {
            id
            name
          }
        }
      }
    }
  }
}
    `;
export const GetUsersNameDocument = gql`
    query GetUsersName($limit: Int!, $offset: Int) {
  users(limit: $limit, offset: $offset) {
    pageInfo {
      page
      paginationLength
      hasNextPage
      hasPreviousPage
      count
      totalCount
    }
    nodes {
      id
      name
    }
  }
}
    `;
export const GetUserIdsDocument = gql`
    query GetUserIds($limit: Int!, $offset: Int) {
  users(limit: $limit, offset: $offset) {
    nodes {
      id
    }
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
  }
}
    `;
export const GetWorkDocument = gql`
    query GetWork($id: ID!) {
  work(id: $id) {
    id
    title
    summary
    image_url
    duration
    number_of_people
    language
    role
    url
    brief_story
    user {
      id
      name
    }
  }
}
    `;
export const GetWorksDocument = gql`
    query GetWorks($limit: Int!, $offset: Int) {
  works(limit: $limit, offset: $offset) {
    pageInfo {
      page
      paginationLength
      hasPreviousPage
      hasNextPage
      count
      totalCount
    }
    nodes {
      id
      title
      summary
      image_url
      duration
      number_of_people
      language
      role
      url
      brief_story
      user {
        id
        name
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUser(variables: Types.GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query');
    },
    GetUsers(variables: Types.GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    GetUsersName(variables: Types.GetUsersNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetUsersNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetUsersNameQuery>(GetUsersNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsersName', 'query');
    },
    GetUserIds(variables: Types.GetUserIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetUserIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetUserIdsQuery>(GetUserIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserIds', 'query');
    },
    CreateUser(variables: Types.CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    },
    GetWork(variables: Types.GetWorkQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetWorkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetWorkQuery>(GetWorkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetWork', 'query');
    },
    GetWorks(variables: Types.GetWorksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetWorksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetWorksQuery>(GetWorksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetWorks', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;