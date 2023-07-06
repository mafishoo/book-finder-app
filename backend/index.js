const express = require('express');
const app = express();
const port = 3000; // Specify the port number you want to use
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
