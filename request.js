const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	fs.writeFile(path, body, err => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
	});
});
