const request = require('request');
//const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const url = '';
const userIput = process.argv.slice(2);

const getBreedData = function(breed, callback) {
  request(url + breed, (err, res, body) => {
    if (err) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    if (breed in data[0]) {
      const breedDescriptionToPrint = data[0]['description'];
      callback(err, breedDescriptionToPrint);
    } else {
      console.log(`Sorry, no such ${breed} in our database.`);
    }
  });
};

getBreedData(userIput, (err, description) => {
  if (err) {
    console.log(`Sorry, there was an error: `, err);
  } else {
    console.log(description);
  }
});