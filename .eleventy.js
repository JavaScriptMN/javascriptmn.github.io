const siteSettings = require('./src/globals/site.json');

module.exports = function (config) {
  config.addPassthroughCopy('./src/css/tailwind.include.css');
  config.addPassthroughCopy({ public: './' });

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
