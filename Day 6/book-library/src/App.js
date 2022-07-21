import React, {useState} from 'react';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";



export default function App() {

  function createBook() {

  }

  function deleteBook() {


  }


  return ( 
    <div className='react container p-3 card mt-3'>
        

      <div className='text-center'>
        <h1>Book Library</h1>
      </div>
      
      <div className='container p-3 rounded'>
      <hr></hr>
        <BookInput></BookInput>
        <hr></hr>
        <BookTable></BookTable>


      </div>   
    </div>
  ) 
}
