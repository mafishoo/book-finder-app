import logo from "./logo.svg";
import AddBook from "./components/addBook/addBook";
import BookForm from "./components/bookForm/bookForm";
import BookItem from "./components/bookItem/bookItem";
import BookList from "./components/bookList/bookList";
import Home from "./components/home/home";
import "./App.css"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/books" element={<BookList/>}> </Route>
        <Route path="/books/:id" element={<BookItem/>}> </Route>
        <Route path="/books/add" element={<AddBook/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
