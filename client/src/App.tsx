import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';

const CHARACTER_QUERY = gql`
  {
    houses {
      id
      name
      words
    }
  }
`;

const CREATE_HOUSE = gql`
  mutation createHouse($id: ID!, $name: String!, $words: String) {
    createHouse(id: $id, name: $name, words: $words) {
      id
      name
      words
    }
  }
`;

const DELETE_HOUSE = gql`
  mutation deleteHouse($id: ID!) {
    deleteHouse(id: $id) {
      id
      name
      words
    }
  }
`;

const App = () => {
  const id = 5;
  const name = 'houseTest';
  const words = 'Best house ever';
  const { loading, error, data } = useQuery(CHARACTER_QUERY);

  const [createHouse] = useMutation(CREATE_HOUSE);

  const [deleteHouse] = useMutation(DELETE_HOUSE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h4>Houses : </h4>
      {data.houses.map((x: any) => (
        <ul key={x.id}>
          <li>{x.id}</li>
          <li>{x.name}</li>
          <li>{x.words}</li>
        </ul>
      ))}

      <button
        onClick={() => {
          createHouse({
            variables: { id, name, words },
          })
            .then(({ data }) => {})
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Add house
      </button>

      <button
        onClick={() => {
          deleteHouse({
            variables: { id },
          })
            .then(({ data }) => {})
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        delete house
      </button>
    </div>
  );
};

export default App;
