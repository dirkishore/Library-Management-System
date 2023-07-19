import axios from "axios";
import { useState } from "react";

function InsertBookForm({
  bookList,
  setBookName,
  setAuthorName,
  setAvailability,
  handleInsert,
}) {
  return (
    <form method="post" onSubmit={handleInsert} autoComplete="off">
      <label htmlFor="BookName" className="form-label">
        Book Name
      </label>
      <input
        type="text"
        name="BookName"
        id="BookName"
        placeholder="Enter Book Name"
        className="form-control"
        required
        onChange={(e) => setBookName(e.target.value)}
      />
      <label htmlFor="BookName" className="form-label mt-3">
        Arthor Name
      </label>
      <input
        type="text"
        name="BookName"
        id="BookName"
        placeholder="Enter Arthor Name"
        className="form-control"
        required
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <label htmlFor="BookName" className="form-label mt-3">
        Available Books
      </label>
      <input
        type="number"
        name="BookName"
        id="BookName"
        placeholder="Available Books"
        className="form-control"
        required
        onChange={(e) => setAvailability(e.target.value)}
      />
      {/* <div className="d-grid mt-4 col-2 mx-auto">
        <button className="btn btn-primary ">Insert</button>
      </div> */}
    </form>
  );
}

export default InsertBookForm;
