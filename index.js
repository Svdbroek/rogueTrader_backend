const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const loginRouter = require("./auth/router");
const characterRouter = require("./character/router");

const parserMiddleware = bodyParser.json();
const corsMiddleware = cors();

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(loginRouter);
app.use(characterRouter);

app.listen(port, console.log(`listening on port ${port}`));
