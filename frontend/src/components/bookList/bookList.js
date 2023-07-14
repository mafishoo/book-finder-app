import React, { useState } from 'react';
import "./bookList.css";
import NavBar from "../navBar/navBar";
import Header from '../header/Header.jsx';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }
  ]);

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div> 
    <NavBar/>
    <Header type="list"/>
    List
    </div>
    // <div>
    //   <h1>Book List</h1>
    //   <ul>
    //     {books.map(book => (
    //       <li key={book.id}>
    //         <span>{book.title}</span>
    //         <button onClick={() => handleDelete(book.id)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default BookList;
