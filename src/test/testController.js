const { testService } = require('./services');

exports.test = async (req, res) => {
  const response = testService.test();
  res.json({ response });
};
