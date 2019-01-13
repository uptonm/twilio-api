// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
require("dotenv").config();
const { ACCOUNT_SID, AUTH_TOKEN } = process.env;
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

module.exports = (to, auth) => {
  client.messages
    .create({
      body: auth,
      from: "+18572147755",
      to: to
    })
    .done();
};
