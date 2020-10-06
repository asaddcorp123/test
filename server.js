require("dotenv").config();

const axios = require("axios");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const stage = require("./config")[environment];

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

if (environment !== "production") {
  app.use(logger("dev"));
}

app.listen(`3000`, () => {
  var a = axios
    .post("http://10.20.251.10/crm/api/radius/online_status", {
      userid: "6",
      api_key: "5bb4ea53f53e42b22251c57e5ba6899bd3da5ee4fd43756cca",
      username: "asadtest1",
    })
    .then(function (response) {
      console.log(response);
    });
  console.log(
    `SERVER CONNECTION STATUS : SERVER IS LISTENING ON PORT NUMBER 3000`
  );
  console.log(a);
});

module.exports = app;
