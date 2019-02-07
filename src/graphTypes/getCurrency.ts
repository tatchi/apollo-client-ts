/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrency
// ====================================================

export interface getCurrency_rates {
  __typename: "ExchangeRate";
  currency: string | null;
  rate: string | null;
}

export interface getCurrency {
  rates: (getCurrency_rates | null)[] | null;
}

export interface getCurrencyVariables {
  curr: string;
}
