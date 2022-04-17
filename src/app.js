const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use('/api', "place router here")

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
