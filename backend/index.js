const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bookRouter = require("./routes/book")
const userRouter = require("./routes/user")
const app = express();
const port = 5001; // Specify the port number you want to use

mongoose.connect("mongodb+srv://mafi64:Test1234@employee-app.chwgxva.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log("DB connection is successful")
})
.catch((err)=>{ console.error(err) } );

//middlewares
app.use(express.json())
app.use(cors()); // middleware used to list the allowed applications that can make a call to the backend 
app.use("/api/books", bookRouter)
app.use("/api/users", userRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

