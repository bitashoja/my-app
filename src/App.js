import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProfileContexts } from "./Components/contexts/ProfileContexts";
import Profile from "./Components/profiles/Profile";
import ProfileDetails from "./Components/profiles/ProfileDetails";

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
  const { loading, error, data } = useQuery(
    GET_CHARACTERS
    // GET_CHARACTER_BY_IDS,
    // GET_CHARACTERS_BY_NAME,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ProfileContexts.Provider value={data}>
      <div className="App">
        <Routes>
          <Route index element={<Profile data={data} />} />
          <Route path="/profile">
            <Route path=":id" element={<ProfileDetails />} />
          </Route>
        </Routes>
      </div>
    </ProfileContexts.Provider>
  );
}

export default App;
