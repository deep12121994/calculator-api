const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const calcRouter = require("./routes/calRoutes");
const port = 3000;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.use(morgan("dev"));
app.use("/", calcRouter);

app.get("/", (__, res) => {
	res.json("Hello world!");
});
// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;