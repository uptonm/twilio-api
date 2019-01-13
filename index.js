const readline = require("readline");
const sms = require("./sms");
const timeDiff = require("./timeDiff");

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const start = () => {
  let to;
  scanner.question("What is your phone number: ", answer => {
    to = answer;
    const auth = Math.floor(Math.random() * 90000) + 10000;
    const start = new Date();
    sms(to, auth);
    scanner.question("Enter 2 factor auth code: ", answer => {
      const end = new Date();
      const diff = timeDiff(start, end);
      if (diff <= 10) {
        if (answer == auth) {
          console.log("Access granted");
        } else {
          console.log("Access denied");
        }
      } else {
        console.log("code has expired, try again");
      }
      scanner.close();
    });
  });
};

start();
