import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile({ data, setQuery }) {
  return (
    <div>
      <div className="headerSearch">
        <img
          src="./images/team-fill.svg"
          alt="person"
          className="headerSearch-img"
        />
        <p className="headerSearch-search">
          <span>Search:</span>
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </p>
      </div>
      <div className="characterApp">
        {data.map((character) => {
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
                }
              >
                <h3 className="characterName">{character.name}</h3>
              </div>
              <Link to={`/profile/${character.id}`} key={character.id}>
                <button className="characterButton">Profile</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
