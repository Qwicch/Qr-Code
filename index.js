/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { writeFile } from 'fs';
import qrImage from 'qr-image';

const question = {
    type: 'input',
    name: 'website-url',
    message: 'Enter the URL of the website:'
}

inquirer
  .prompt([question])
  .then((answers) => {
    const url = answers['website-url'];

    // Create a QR code PNG
    const qr_png = qrImage.imageSync(url, { type: 'png' });

    // Write the PNG data to a file
    writeFile('web-qr.png', qr_png, (err) => {
        if (err) throw err;
        console.log('The QR code PNG has been saved!');
    });

    // Write the URL to a text file
    writeFile('message.txt', url, (err) => {
        if (err) throw err;
        console.log('The URL has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error occurred while prompting.");
    } else {
      console.log("Another error occurred.");
    }
  });
