import React, { useContext } from "react";
import { ProfileContexts } from "../contexts/ProfileContexts";
import { useParams } from "react-router-dom";

export default function ProfileDetails() {
  const { id } = useParams();
  const data = useContext(ProfileContexts);

  console.log("id :>> ", id);
  const character = data.characters.results.find((item) => item.id === id);

  return (
    <div>
      {character.id !== id && "Page not found"}

      <div className="characterProfile">
        <img src={character.image} alt="character" className="characterImage" />
        <h2>Profile {id}</h2>
        <h3>species:{character.species}</h3>
        <h3>type:{character.type}</h3>
        <h3>gender:{character.gender}</h3>
      </div>
    </div>
  );
}
