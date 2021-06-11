import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";

const httpLink = createHttpLink({ uri:
"http://localhost:4300/graphql"});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link, 
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
