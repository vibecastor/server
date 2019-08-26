// Define which API environment variables to use...
if (process.env.NODE_ENV === 'production') {
  // in prod
  module.exports = require('./prod');
} else {
  // use dev keys
  module.exports = require('./dev');
}
