const readline = require("readline");
const sms = require("./sms");

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const start = () => {
  let to;
  scanner.question("What is your phone number: ", answer => {
    to = answer;
    const auth = Math.floor(Math.random() * 90000) + 10000;
    sms(to, auth);
    scanner.question("Enter 2 factor auth code: ", answer => {
      if (answer == auth) {
        console.log("Access granted");
      } else {
        console.log("Access denied");
      }
      scanner.close();
    });
  });
};

start();
