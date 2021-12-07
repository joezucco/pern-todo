const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = 3000

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(3000, () => {
  console.log(`server has started on port ${PORT}`);
});
