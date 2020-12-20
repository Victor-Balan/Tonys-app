const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Listening on port: " + port + ". You can do it! 🚀👨‍💻");


// const twilioAccount = require("../TwilioCredentials/twilioCredits");
//       const twilio = require("twilio");
//       const client = new twilio(
//         twilioAccount.twilioSID,
//         twilioAccount.twilioTOKEN
//       );

//       client.messages
//         .create({
//           body:
//             "This is the ship that made the Kessel Run in fourteen parsecs?",
//           from: "+12517584797",
//           to: "+18327095900"
//         })
//         .then(message =>
//           console.log(`The order review was sent to ${message.to}`)
//         );
