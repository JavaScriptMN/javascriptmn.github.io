const fs = require('fs');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const htmlmin = require('html-minifier');
const { minify } = require('terser');
const siteSettings = require('./src/globals/site.json');

const dateFormatter = Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/tailwind.include.css');
  eleventyConfig.addPassthroughCopy({ public: './' });

  eleventyConfig.addShortcode('year', function () {
    return new Date().getFullYear().toString();
  });

  eleventyConfig.addFilter('formatDateTime', function (date) {
    return dateFormatter.format(date);
  });

  eleventyConfig.addPlugin(inclusiveLangPlugin);

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addPlugin(cacheBuster({ outputDirectory: 'dist' }));

    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
      }

      return content;
    });
  }

  eleventyConfig.addNunjucksAsyncFilter(
    'jsmin',
    async function (code, callback) {
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
    }
  );

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
