import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ProfileDetails from "./Components/profiles/ProfileDetails";
import { ProfileContexts } from "./Components/contexts/ProfileContexts";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import Profile from "./Components/profiles/Profile";

const GET_DATA = gql`
  {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
        image
        status
        species
        type
        gender
        id
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_DATA);
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
