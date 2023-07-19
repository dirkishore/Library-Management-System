import BookList from "./BookList";
import Borrow from "./Borrow";
import InsertBook from "./InsertBook";

function Sidebar({
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
  const loggedInUser = localStorage.getItem("authenticated");

  if (!loggedInUser) {
    console.log(localStorage.getItem("authenticated"));
    return (window.location = "/login/");
  } else {
    return (
      <div>
        <div
          class="nav nav-pills d-flex flex-column flex-shrink-0 p-3 text-bg-dark position-absolute top-0 start-0 z-1"
          id="pills-tab"
          role="tablist"
          style={{ width: 280 + "px", height: 100 + "vh" }}
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-4">Dashboard</span>
          </a>
          <hr />

          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item" role="presentation">
              <a
                href="#"
                class="nav-link active text-white"
                id="pillBookList"
                data-bs-toggle="pill"
                data-bs-target="#bookList"
                aria-current="page"
              >
                Book List
              </a>
            </li>

            <li>
              <a
                href="#"
                class="nav-link text-white"
                id="pillBorrow"
                data-bs-toggle="pill"
                data-bs-target="#Borrow"
              >
                Borrows
              </a>
            </li>
          </ul>

          <hr />
          <div class="">
            <ul class="text-small shadow">
              <li className="list-unstyled">
                <a
                  class="list-group-item"
                  href="#"
                  onClick={() => localStorage.setItem("authenticated", false)}
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="bookList"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <BookList
              bookList={bookList}
              setBookName={setBookName}
              setAuthorName={setAuthorName}
              setAvailability={setAvailability}
              updatedBookName={updatedBookName}
              updatedAuthorName={updatedAuthorName}
              updatedAvailability={updatedAvailability}
              setUpdatedBookName={setUpdatedBookName}
              setUpdatedAuthorName={setUpdatedAuthorName}
              setUpdatedAvailability={setUpdatedAvailability}
              handleInsert={handleInsert}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </div>

          <div
            class="tab-pane fade"
            id="Borrow"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <Borrow />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
