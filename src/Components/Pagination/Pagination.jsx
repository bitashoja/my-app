import React from "react";

export default function Pagination({ setPage, page }) {
  return (
    <div>
      <nav className="d-flex justify-content-center">
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
      ;
    </div>
  );
}
