const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const request = require("request");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get(`/api/albums/:id`, (req, res) => {
  request(
    `https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(JSON.parse(body));
      }
    }
  );
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server Running on Port ${PORT}`)
);
