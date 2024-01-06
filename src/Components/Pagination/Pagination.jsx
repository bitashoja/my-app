import React from "react";
// import { GET_CHARACTERS } from "../graphql/queries";
// import { GET_CHARACTER_BY_IDS } from "../graphql/queries";
import { Link } from "react-router-dom";
export default function Pagination({ characters, data }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  console.log("data.length :>> ", data.length);
  console.log("records :>> ", records);
  console.log("nPage :>> ", nPage);
  return (
    <div>
      {/* <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item disabled"></li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              1
            </button>
          </li>
          <li className="page-item">
            <button
              className={page + 1 === page ? "page-link active" : "page-link"}
              onClick={() => setPage(page + 1)}>
              2
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              3
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              4
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              5
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              6
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              7
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              8
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              9
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              10
            </button>
          </li>
          <li className="page-item"></li>
        </ul>
      </nav>
      ; */}

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link href="#" className="page-link" onClick={prePage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, id) => {
            console.log("n :>> ", n);
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={id}>
              <Link
                href="#"
                className="page-link"
                onClick={() => changeCPage(n)}>
                {n}
              </Link>
            </li>;
          })}
          <li className="page-item">
            <Link href="#" className="page-link" onClick={nextPage}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage() {
    setCurrentPage(characters[0]);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}
