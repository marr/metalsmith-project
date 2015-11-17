var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdownit');
var sass = require('metalsmith-sass');
var footnote = require('markdown-it-footnote');

var md = markdown('default', {
  footnote: true
});
md.parser.use(footnote);
Metalsmith(__dirname)
  //.use(layouts('handlebars'))
  .use(md)
  .use(sass({ outputDir: 'css' }))
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
