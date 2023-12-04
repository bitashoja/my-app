import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ProfileDetails from "./Components/profiles/ProfileDetails";
import { ProfileContexts } from "./Components/contexts/ProfileContexts";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import Profile from "./Components/profiles/Profile";

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
export const GET_CHARACTERS_BY_NAME = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
export const GET_CHARACTER_BY_IDS = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      status
      gender
      species
      type
      location {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(
    GET_CHARACTERS,
    GET_CHARACTER_BY_IDS,
    GET_CHARACTERS_BY_NAME,
  );
  useEffect(() => {
    console.log(loading, error, data);
  });
  return (
    <ProfileContexts.Provider value={data}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="/profile">profile</Link>
              </div>
            }
          />
          <Route path="/profile">
            <Route index element={<Profile data={data} />} />
            <Route path=":id" element={<ProfileDetails />} />
          </Route>
        </Routes>
      </div>
    </ProfileContexts.Provider>
  );
}

export default App;
