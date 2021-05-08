const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from express" });
});

app.listen(port, () => {
  console.log(port);
});
