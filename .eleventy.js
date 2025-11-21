module.exports = function (eleventyConfig) {
  // Copy the admin folder to the root of _site
  eleventyConfig.addPassthroughCopy({ "public/admin": "admin" });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
