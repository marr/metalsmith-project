var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdown');
var sass = require('metalsmith-sass');

Metalsmith(__dirname)
  .use(layouts('handlebars'))
  .use(markdown())
  .use(sass({ outputDir: 'css' }))
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
