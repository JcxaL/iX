import React, { useState } from "react";
import { Book } from "../classes/book";

export default function BookInput(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  function submitBook(event) {
    event.preventDefault();

    const newBook = new Book(title, author, isbn);

    props.newBook(newBook);

    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  function clearForm(event) {
    event.preventDefault();
    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  return (
    <div className="container p-3">
      <form onSubmit={submitBook}>
        <div className="p-3">
          <p className="mb-2 h6">Book Title:</p>
          <input
            value={title}
            className="form-control"
            placeholder="Title"
            onChange={(input) => setTitle(input.target.value)}
            type="text"
          />
        </div>

        <div className="p-3">
          <p className="mb-2 h6">Book Author(s):</p>
          <input
            value={author}
            className="form-control"
            placeholder="Author"
            onChange={(input) => setAuthor(input.target.value)}
            type="text"
          />
        </div>

        <div className="p-3">
          <p className="mb-2 h6">ISBN Number:</p>
          <input
            value={isbn}
            className="form-control"
            placeholder="ISBN-10/13#"
            onChange={(input) => setIsbn(input.target.value)}
            type="number"
            min="1000000000"
            max="9999999999999"
            maxLength="13"
          />
          <small class="form-text text-muted">
            Your ISBN must be 10/13 characters long, contain only numbers.
          </small>
        </div>

        <div className="p-3">
          <button
            className="form-control btn btn-primary"
            type="submit"
            disabled={!(isbn && title && author)}
          >
            Add To Library
          </button>
        </div>

        <div className="px-3">
          <button
            className="form-control btn btn-danger"
            type="clear"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
