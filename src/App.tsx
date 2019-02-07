import React from "react";
import "./App.css";
import { defaults, resolvers } from "./resolvers";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { ApolloProvider, Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";
import { GetCurrencyQuery, GetCurrencyVariables } from "../components";
import TodoList from "./TodoList";
import { ApolloLink } from "apollo-link";
import { loader } from "graphql.macro";
const query = loader("./App.graphql");
const typeDefs = loader("./localSchema.graphql");

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const stateLink = withClientState({ cache, resolvers, defaults, typeDefs });

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, link])
});

// export const MYQ = gql`
//   query getCurrency($curr: String!) {
//     rates(currency: $curr) {
//       currency
//       rate
//     }
//   }
// `;

const ExchangeRates = () => (
  <>
    <TodoList />
    <Query<GetCurrencyQuery, GetCurrencyVariables>
      query={query}
      variables={{ curr: "USD" }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ));
      }}
    </Query>
  </>
);

const App = () => (
  <>
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  </>
);

export default App;
