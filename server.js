const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const history = require('connect-history-api-fallback');

const app = express();


const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Listening on port: " + port + ". You can do it! 🚀👨‍💻");
