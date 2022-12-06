const debug = require('debug')('app');

const app = require('./app');

app.listen(3000, () => {
  debug('Server listening on http://localhost:3000');
});
