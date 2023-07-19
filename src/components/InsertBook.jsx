import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function InsertBook() {
  const [BookName, setBookName] = useState();
  const [authorName, setAuthorName] = useState();
  const [availability, setAvailability] = useState();

  const handleInsert = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/books/add-book", {
        BookName,
        AuthorName: authorName,
        Available: availability,
      })
      .then(() => {
        alert("Book added");
        console.log(BookName, authorName, availability);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mt-4" style={{ marginLeft: 290 + "px" }}>
        <h1 className="text-center">Insert a Book</h1>
        <div className="d-flex justify-content-center mt-5 pt-5">
          <div className="w-25">
            <div className="card">
              <div className="card-body">
                <form method="post" onSubmit={handleInsert}>
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
                  <div className="d-grid mt-3">
                    <button className="btn btn-primary">Insert</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertBook;
