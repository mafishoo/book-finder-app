import React, { useEffect, useState } from "react";
import "./bookList.css";
import NavBar from "../navBar/navBar";
import Header from "../header/Header.jsx";
import BookItem from "../bookItem/bookItem";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const handleImageClick = (e) => {
    console.log("image clicked");
  };
  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://localhost:5001/api/books/book/${id}`
      );

      console.log(response.data);
      //   setBooks(books.filter((book) => book.Id !== id));
      window.location.reload();
    } catch (error) {}
  };

  useEffect(() => {
    // Fetch books from the API
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/books/bookList"
      );
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <Header />
      <div className="bookListContainer">
        <h1>The Book Store </h1>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {books.map((book) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card key={book._id} sx={{ maxWidth: "100%", height: "100%" }}>
              <CardActionArea onClick={() => handleImageClick(book._id)}>
                  <Link to={`/books/${book._id}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      width="100%"
                      image={book.img}
                      alt="Book cover"
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {book.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/books/update/${book._id}`}>
                    <Button size="small" color="primary">
                      edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(book._id)}
                    size="small"
                    color="primary"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default BookList;
