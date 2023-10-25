import React, { useContext } from "react";
import { ProfileContexts } from "../contexts/ProfileContexts";
import { useParams } from "react-router-dom";

export default function ProfileDetails() {
  const { id } = useParams();
  const data = useContext(ProfileContexts);

  console.log("id :>> ", id);

  return (
    <div>
      {data?.characters.location.find(
        (character) =>
          character.id === id && (
            <div className="characterProfile">
              <h3>Profile {id}</h3>
              <p>species:{character.species}</p>
              <span>type:{character.type}</span>
              <p>gender:{character.gender}</p>
            </div>
          ),
      )}
    </div>
  );
}
