const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const calcRouter = require("./routes/calRoutes");
const port = 3000;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// your code goes here



app.get("/", (req, res) => {
	res.send(200).send("Hello world!");
});

app.use("/", calcRouter);
// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;