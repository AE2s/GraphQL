import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  useQuery,
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

client
  .query({
    query: gql`
      {
        houses {
          id
          name
          words
        }
      }
    `,
  })
  .then((result) => console.log(result));

const Root = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Testing Graph QL client-Server</h2>
      <App />
    </div>
  </ApolloProvider>
);
render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
