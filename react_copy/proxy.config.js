/* eslint-disable */
const mock = {
  'GET /api/*': 'http://gfboa-laravel.dev/',
  'POST /api/*': 'http://gfboa-laravel.dev/',
  'PUT /api/*': 'http://gfboa-laravel.dev/',
  'PATCH /api/*': 'http://gfboa-laravel.dev/',
  'DELETE /api/*': 'http://gfboa-laravel.dev/',
};

require('fs')
  .readdirSync(require('path').resolve('mock'))
  .forEach(file => {
    if (typeof file === 'string' && file.substr(0, 1) !== '.') {
      Object.assign(mock, require(`./mock/${file}`))
    }
  });

module.exports = mock;
