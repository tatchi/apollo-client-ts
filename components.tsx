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

  name: Maybe<string>;

  rate: Maybe<string>;
};

export type GetCurrency33Variables = {
  curr: string;
};

export type GetCurrency33Query = {
  __typename?: "Query";

  rates: Maybe<GetCurrency33Rates[]>;
};

export type GetCurrency33Rates = {
  __typename?: "ExchangeRate";

  rate: Maybe<string>;
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
      name
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
export const GetCurrency33Document = gql`
  query getCurrency33($curr: String!) {
    rates(currency: $curr) {
      rate
    }
  }
`;
export class GetCurrency33Component extends React.Component<
  Partial<ReactApollo.QueryProps<GetCurrency33Query, GetCurrency33Variables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetCurrency33Query, GetCurrency33Variables>
        query={GetCurrency33Document}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetCurrency33Props<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetCurrency33Query, GetCurrency33Variables>
> &
  TChildProps;
export function GetCurrency33HOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetCurrency33Query,
        GetCurrency33Variables,
        GetCurrency33Props<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetCurrency33Query,
    GetCurrency33Variables,
    GetCurrency33Props<TChildProps>
  >(GetCurrency33Document, operationOptions);
}
