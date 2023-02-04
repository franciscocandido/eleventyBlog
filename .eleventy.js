const elenvetySass = require('eleventy-sass');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(elenvetySass);

  return {
    dir: {
      input: 'src',
      output: '_site',
      layouts: '_layouts',
    },
  };
};
