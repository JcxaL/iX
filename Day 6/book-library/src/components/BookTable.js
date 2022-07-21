import React from "react";

export default function BookTable(props) {
  function removeBook(book) {
    props.removeBook(book);
  }

  return (
    <div className="mt-1 mx-5">
      <table className="table">
      <caption className="mt-2">Your library{
        props.books.length === 0 ? 
            " has no books. Try to add some!" 
            : " has a total of " + props.books.length + " books"}</caption>
        <thead>
          <tr>
            <th className="col-auto">Title</th>
            <th className="col-auto">Author</th>
            <th className="col-auto">ISBN</th>
            <th className="col-auto"></th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => (
            <tr key={book.isbn}>
              <td className="p-2">{book.title}</td>
              <td className="p-2">{book.author}</td>
              <td className="p-2">{book.isbn}</td>
              <td>
                <button
                  onClick={(remove) => removeBook(book)}
                  className="btn btn-sm btn-danger"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}

        </tbody>
       
      </table>
      <hr></hr>
    </div>
  );
}
