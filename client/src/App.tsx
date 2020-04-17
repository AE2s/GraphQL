import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';

const CHARACTER_QUERY = gql`
  {
    character(name: $name) {
      male
      name
      books
      titles
    }
  }
`;

const CREATE_HOUSE = gql`
  mutation CreateHouse($houseId: ID!, $houseName: String!, $words: String) {
    createHouse(id: $houseId, name: $houseName, words: $houseWords) {
      id
      name
      words
    }
  }
`;

const App = () => {
  const name = 'Addam Marbrand';
  const houseId = 5;
  const houseName = 'houseTest';
  const houseWords = 'Best house ever';
  const { loading, error, data } = useQuery(CHARACTER_QUERY, {
    variables: { name },
  });
  console.log(data);

  const [addHouse, { ...rest }] = useMutation(CREATE_HOUSE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.character.name}
      <h4>Books : </h4>
      <ul>
        {data.character.books.map((x: any) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <h4>Titles : </h4>
      <ul>
        {data.character.titles.map((x: any) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          addHouse({
            variables: { houseId, houseName, houseWords },
          });
        }}
      >
        Add house
      </button>
    </div>
  );
};

export default App;
