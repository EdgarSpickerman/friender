const express = require("express");
const router = require("./lib/router");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const serverSuccessMessage = (port) =>
  `The server is running on localhost:${port}`

app.use(express.static(path.join(__dirname, 'lib/public')))

app.use((err, req, res, next) => {
  res.sendStatus(404)
})

app.on("error", () => console.log("An error occured at start up"))
app.listen(port, () => console.log(serverSuccessMessage(port)))