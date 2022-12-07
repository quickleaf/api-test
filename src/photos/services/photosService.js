const axios = require('axios');

exports.getPhotos = async query => {
  const response = await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
  );
  return response.data;
};
