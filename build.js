var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdownit');
var sass = require('metalsmith-sass');
var footnote = require('markdown-it-footnote');

var md = markdown('default', {
  footnote: true,
  html: true
});
md.parser.use(footnote);
Metalsmith(__dirname)
  .use(md)
  .use(layouts('handlebars'))
  .use(sass({ outputDir: 'css' }))
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
