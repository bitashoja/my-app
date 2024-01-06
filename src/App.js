import { useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import { ProfileContexts } from "./Components/contexts/ProfileContexts";
import Profile from "./Components/profiles/Profile";
import ProfileDetails from "./Components/profiles/ProfileDetails";
import "./App.css";
import * as React from "react";
import { GET_CHARACTERS } from "./Components/graphql/queries";
import Pagination from "./Components/Pagination/Pagination";
function App() {
  const [page, setPage] = React.useState(1);

  const [query, setQuery] = React.useState("");
  const [characters, setCharacters] = React.useState([]);

  const { loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page, name: query },
    onCompleted: (data) => {
      if (data.characters.results) {
        setCharacters([...characters, ...data.characters.results]);
      }
    },
  });

  const onQueryChange = (value) => {
    setCharacters([]);
    setQuery(value);
  };

  if (loading && !characters) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <ProfileContexts.Provider value={characters}>
      <div className="App">
        <Routes>
          <Route
            index
            element={<Profile data={characters} setQuery={onQueryChange} />}
          />
          <Route path="/profile">
            <Route path=":id" element={<ProfileDetails />} />
          </Route>
        </Routes>
        <Pagination data={characters} />
      </div>
    </ProfileContexts.Provider>
  );
}

export default App;
