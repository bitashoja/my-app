import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import { ProfileContexts } from "./Components/contexts/ProfileContexts";
import Profile from "./Components/profiles/Profile";
import ProfileDetails from "./Components/profiles/ProfileDetails";
import "./App.css";
import * as React from "react";

export const GET_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;
// export const GET_CHARACTERS_BY_NAME = gql`
//   query characters($page: Int, $filter: FilterCharacter) {
//     characters(page: $page, filter: $filter) {
//       info {
//         count
//       }
//       results {
//         id
//         name
//         image
//         status
//       }
//     }
//   }
// `;
// export const GET_CHARACTER_BY_IDS = gql`
//   query charactersByIds($ids: [ID!]!) {
//     charactersByIds(ids: $ids) {
//       id
//       name
//       image
//       status
//       gender
//       species
//       type
//       location {
//         name
//       }
//     }
//   }
// `;

function App() {
  const [page, setPage] = React.useState(1);
  const [characters, setCharacters] = React.useState([]);
  const { loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
    onCompleted: (data) => {
      console.log("data.characters.results", data.characters.results);
      if (data.characters.results) {
        setCharacters([...characters, ...data.characters.results]);
      }
    },
  });

  if (loading && !characters) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ProfileContexts.Provider value={characters}>
      <div className="App">
        <Routes>
          <Route index element={<Profile data={characters} />} />
          <Route path="/profile">
            <Route path=":id" element={<ProfileDetails />} />
          </Route>
        </Routes>
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </div>
    </ProfileContexts.Provider>
  );
}

export default App;
