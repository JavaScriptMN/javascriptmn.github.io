const fs = require('node:fs');
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
  const runMode = process.env.ELEVENTY_RUN_MODE;
  const isProduction = runMode === 'build';

  eleventyConfig.addPassthroughCopy({ public: './' });

  eleventyConfig.addShortcode('year', function () {
    return new Date().getFullYear().toString();
  });

  eleventyConfig.addFilter('formatDateTime', function (date) {
    return dateFormatter.format(date);
  });

  eleventyConfig.addPlugin(inclusiveLangPlugin);

  if (isProduction) {
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

  eleventyConfig.addAsyncFilter('jsmin', async function (code) {
    if (isProduction) {
      try {
        const minified = await minify(code);
        return minified.code;
      } catch (err) {
        console.error('Terser error: ', err);
        // Fail gracefully.
        return code;
      }
    } else {
      return code;
    }
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
