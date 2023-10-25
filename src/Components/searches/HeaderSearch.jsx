import React, { useState } from "react";
import { useContext } from "react";
import "./HeaderSearch.css";
import { ProfileContexts } from "../contexts/ProfileContexts";

export default function HeaderSearch() {
  const data = useContext(ProfileContexts);
  const [query, setQuery] = useState("");
  console.log(
    "query :>> ",
    data?.characters.results.filter((user) =>
      user.name.toLowerCase().includes("b"),
    ),
  );

  return (
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

      <div>
        {data?.characters.results
          .filter((character) => character.name.toLowerCase().includes(query))
          .map((character) => (
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
            </div>
          ))}
      </div>
    </div>
  );
}
