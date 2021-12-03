const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';



const fetchBreedDescription = function(breed, callback) {
  request(url + breed, (error, res, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const breedsObject = data[0];
    //console.log(breedsObject);
    if (breedsObject) {
      const breedDescriptionToPrint = breedsObject['description'];
      callback(null, breedDescriptionToPrint);
    } else {
      callback(error, `Sorry, there's no description matching breed ${breed} in our database.`);
    }
  });
};


module.exports = {
  fetchBreedDescription
};