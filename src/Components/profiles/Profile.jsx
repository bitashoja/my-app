import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
export default function Profile({ data }) {
  return (
    <div>
      <div className="characterApp">
        {data?.characters.results.map((character) => {
          return (
            <div key={character.id} className="character">
              <img
                src={character.image}
                alt="character"
                className="characterImage"
              />
              <div
                className={
                  character.status === "Dead"
                    ? "dead"
                    : character.status === "Alive"
                    ? "alive"
                    : "unknown"
                }>
                <h3 className="characterName">{character.name}</h3>
              </div>
              <Link to={character.id}>
                <button className="characterButton">Profile</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
