export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type GetCurrencyVariables = {
  curr: string;
};

export type GetCurrencyQuery = {
  __typename?: "Query";

  rates: Maybe<GetCurrencyRates[]>;
};

export type GetCurrencyRates = {
  __typename?: "ExchangeRate";

  currency: Maybe<string>;

  rate: Maybe<string>;
};

export type TodosVariables = {};

export type TodosQuery = {
  __typename?: "Query";

  todos: Maybe<TodosTodos[]>;

  visibilityFilter: Maybe<string>;
};

export type TodosTodos = {
  __typename?: "Todo";

  id: number;

  completed: boolean;

  text: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const GetCurrencyDocument = gql`
  query getCurrency($curr: String!) {
    rates(currency: $curr) {
      currency
      rate
    }
  }
`;
export class GetCurrencyComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetCurrencyQuery, GetCurrencyVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetCurrencyQuery, GetCurrencyVariables>
        query={GetCurrencyDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetCurrencyProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetCurrencyQuery, GetCurrencyVariables>
> &
  TChildProps;
export function GetCurrencyHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetCurrencyQuery,
        GetCurrencyVariables,
        GetCurrencyProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetCurrencyQuery,
    GetCurrencyVariables,
    GetCurrencyProps<TChildProps>
  >(GetCurrencyDocument, operationOptions);
}
export const TodosDocument = gql`
  query todos {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;
export class TodosComponent extends React.Component<
  Partial<ReactApollo.QueryProps<TodosQuery, TodosVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<TodosQuery, TodosVariables>
        query={TodosDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type TodosProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<TodosQuery, TodosVariables>
> &
  TChildProps;
export function TodosHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        TodosQuery,
        TodosVariables,
        TodosProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    TodosQuery,
    TodosVariables,
    TodosProps<TChildProps>
  >(TodosDocument, operationOptions);
}
