const {
  fetchBreedDescription
} = require('../breedFetcher');
const {
  assert
} = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it(`returns a message that there's no such breed when an invalid/non-existent breed is passed in`, (done) => {
    fetchBreedDescription('Catcat', (err, desc) => {
      // we expect error in this scenario
      assert.equal(err, null);

      const expectedDescription = `Sorry, there's no description matching breed Catcat in our database.`;
      assert.equal(expectedDescription, desc);
      done();
    });
  });
});