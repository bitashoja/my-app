// import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import * as React from "react";
// import { ProfileContexts } from "../contexts/ProfileContexts";
import { useParams } from "react-router-dom";
import { GET_CHARACTER_BY_IDS } from "../graphql/queries";
export default function ProfileDetails() {
  const { id } = useParams();
  const [characters, setCharacters] = React.useState([]);
  console.log("id :>> ", id);
  const { loading, error } = useQuery(GET_CHARACTER_BY_IDS, {
    variables: { ids: [id] },
    onCompleted: (data) => {
      console.log("data :>> ", data);
      if (data?.charactersByIds) {
        setCharacters([...characters, ...data.charactersByIds]);
      }
    },
  });

  console.log("characters :>> ", characters);
  if (loading && !characters) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!characters) {
    return <div>Page not found</div>;
  }

  console.log("characters.image : ", characters[0]?.image);
  return (
    <div>
      <div className="characterProfile">
        <img
          src={characters[0]?.image}
          alt="character"
          className="characterImage"
        />
        <h2>ProfileId: {id}</h2>
        <h3>Name:{characters[0]?.name}</h3>

        <h3>Species:{characters[0]?.species}</h3>
        <h3>Type:{characters[0]?.type}</h3>
        <h3>Gender:{characters[0]?.gender}</h3>
      </div>
    </div>
  );
}
