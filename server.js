// HEROKU
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
//config
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
console.log("Heroku running...");

app.post("/", function(req, res) {
  res.send(console.log("hello...this is a server.js test"));
});

app.post("/orderplaced", function() {
  const account = require("./src/Twilio/twilioAcc");
  const client = require("twilio")(account.SID, account.TOKEN);
  client.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: "+12517584797",
      to: "+18327095900"
    })
    .then(message => console.log(message));
  console.log("this is SUPPOSED to work damnit!!");
});
console.log("Twilio running...");
const port = process.env.PORT || 8080;
app.listen(port);

// from: "+12517584797",to: "+18327095900"
