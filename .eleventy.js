const fs = require('fs');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const htmlmin = require('html-minifier');
const { minify } = require('terser');
const siteSettings = require('./src/globals/site.json');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/tailwind.include.css');
  eleventyConfig.addPassthroughCopy({ public: './' });

  eleventyConfig.addPlugin(inclusiveLangPlugin);

  eleventyConfig.addNunjucksAsyncFilter('jsmin', async function (
    code,
    callback
  ) {
    if (process.env.ELEVENTY_ENV === 'production') {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error('Terser error: ', err);
        // Fail gracefully.
        callback(null, code);
      }
    } else {
      callback(null, code);
    }
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html');
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end();
        });
      },
    },
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === 'production' &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  return {
    pathPrefix: siteSettings.baseUrl,
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'includes/layouts',
      data: 'globals',
    },
  };
};
