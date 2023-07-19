import { Navigate } from "react-router-dom";
import $ from "jquery";
import DataTable from "datatables.net-dt";
import { useState, useEffect } from "react";
import axios from "axios";
import InsertBookForm from "./InsertBookForm";
import UpdateBookForm from "./UpdateBookForm";

function BookList({
  bookList,
  setBookName,
  setAuthorName,
  setAvailability,
  updatedBookName,
  updatedAuthorName,
  updatedAvailability,
  setUpdatedBookName,
  setUpdatedAuthorName,
  setUpdatedAvailability,
  handleInsert,
  handleUpdate,
  handleDelete,
}) {
  const [EditId, setEditId] = useState(-1);

  const handleEdit = (id) => {
    axios.get(`http://localhost:5000/api/books/book/${id}`).then((res) => {
      setUpdatedBookName(res.data[0][0].BookName);
      setUpdatedAuthorName(res.data[0][0].AuthorName);
      setUpdatedAvailability(res.data[0][0].Available);
    });
    setEditId(id);
  };

  const loggedInUser = localStorage.getItem("authenticated");

  if (!loggedInUser) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div
        className="position-absolute top-0 mt-4 end-0"
        style={{ marginLeft: 280 + "px" }}
      >
        <div className="container">
          <h1 className="text-center">E-Library</h1>
          <h3 className="mt-4 text-center">Book List</h3>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Book
            </button>

            <input
              type="search"
              className=" form-control w-auto"
              placeholder="Search Book"
            />
          </div>

          <table id="bookTable" className="table table-hover">
            <thead>
              <tr>
                <th className="col-1">#</th>
                <th className="col-2">Book Name</th>
                <th className="col-2">Author Name</th>
                <th className="col-1">Available</th>
                <th className="col-1">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => {
                return book.BookId === EditId ? (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <input
                        type="text"
                        value={updatedBookName}
                        className="form-control"
                        onChange={(e) => setUpdatedBookName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={updatedAuthorName}
                        className="form-control"
                        onChange={(e) => setUpdatedAuthorName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={updatedAvailability}
                        className="form-control"
                        onChange={(e) => setUpdatedAvailability(e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleUpdate(book.BookId)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{book.BookName}</td>
                    <td>{book.AuthorName}</td>
                    <td>{book.Available}</td>
                    <td>
                      <a
                        href="#"
                        className="btn btn-warning me-3"
                        onClick={() => handleEdit(book.BookId)}
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(book.BookId)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Book
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <InsertBookForm
                  bookList={bookList}
                  setBookName={setBookName}
                  setAuthorName={setAuthorName}
                  setAvailability={setAvailability}
                  handleInsert={handleInsert}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleInsert}
                >
                  Insert
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="UpdateBook"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update Book
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <UpdateBookForm
                  bookList={bookList}
                  setBookName={setBookName}
                  setAuthorName={setAuthorName}
                  setAvailability={setAvailability}
                  handleEdit={handleEdit}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
