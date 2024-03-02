/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
const fs = require('node:fs');

inquirer
  .prompt([
    console.log("Type the website for creating a qr-code: ")
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile("url.txt", answers, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("books.txt", "utf8"));
        }
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });