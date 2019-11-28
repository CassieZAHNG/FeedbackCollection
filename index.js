const express = require("express");
//app : setup the configuration that assciate with routes
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//dynamically listening port on heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
