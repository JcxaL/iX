import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

export default function App() {
  const [books, setBooks] = useState([]);
  function createBook(book) {
    setBooks([...books, book]);
  }

  function removeBook(book) {
    const targetBooks = books.filter((target) => {
      return target.isbn !== book.isbn;
    });
    setBooks(targetBooks);
  }

  return (
    <div className="react container p-3 card mt-3">
      <div className="text-center mt-3">
        <h1>Book Library</h1>
        <p className="text-muted">by Alvin Li</p>
      </div>

      <div className="container p-3 rounded">
        <hr></hr>
        <BookInput newBook={createBook} />
        <hr></hr>
        <BookTable books={books} removeBook={removeBook} />
      </div>
    </div>
  );
}
