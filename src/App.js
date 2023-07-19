import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import Borrow from "./components/Borrow";

function App() {
  const [bookList, setBookList] = useState([]);
  const [BookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [availability, setAvailability] = useState(null);

  const [updatedBookName, setUpdatedBookName] = useState();
  const [updatedAuthorName, setUpdatedAuthorName] = useState();
  const [updatedAvailability, setUpdatedAvailability] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books/book-list")
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInsert = (e) => {
    e.preventDefault();

    let BookId = bookList.length + 1;

    axios
      .post("http://localhost:5000/api/books/add-book", {
        BookId,
        BookName,
        AuthorName: authorName,
        Available: availability,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:5000/api/books/edit-book/${id}`, {
        BookName: updatedBookName,
        AuthorName: updatedAuthorName,
        Available: updatedAvailability,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/books/delete-book/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Home
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
            }
          />

          <Route path="/borrow" element={<Borrow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
