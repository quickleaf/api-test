const { photosService } = require('./services');

exports.getPhotos = async (req, res) => {
  const response = await photosService.getPhotos(req.query.query);
  res.json(response);
};
