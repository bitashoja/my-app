import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ProfileDetails from "./Components/profiles/ProfileDetails";
import { ProfileContexts } from "./Components/contexts/ProfileContexts";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import Profile from "./Components/profiles/Profile";

const GET_DATA = gql`
  query characters($page: Int) {
    characters(page: $page) {
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
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_DATA);
  useEffect(() => {
    console.log(data);
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
