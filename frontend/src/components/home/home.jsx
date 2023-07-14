import "./home.css";
import NavBar from "../navBar/navBar";
import Header from "../header/Header.jsx";
import Featured from "../featured/Featured";
import { useState } from "react";
function Home() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }, { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ]);
  return (
    <div >
      <NavBar />
      <Header/>
      <div className="homeContainer">
      <Featured books = {books}/>
      </div>
     
    </div>
  );
}

export default Home;
