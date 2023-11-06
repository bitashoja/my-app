import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
export default function Profile({ data }) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState([]);
  let pageSize = 20;
  let pageNumbers;
  const pagesCount = Math.ceil(query.length / pageSize);
  console.log("pagesCount :>> ", pagesCount);
  pageNumbers = Array.from(Array(pagesCount).keys());
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
        {data?.characters.results
          .filter((character) => {
            if (query === "") {
              return character;
            } else if (
              character.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return character;
            }
          })
          .map((character) => {
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
      <nav className="d-flex justify-content-center">
        <ul className="pagination" aria-current="page">
          {pageNumbers.map((pageNumber) => (
            <li className="page-item active" aria-current="page">
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
