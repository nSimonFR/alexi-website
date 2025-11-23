module.exports = function (eleventyConfig) {
  // Copy the admin folder to the root of _site
  eleventyConfig.addPassthroughCopy({ "public/admin": "admin" });

  // Copy images and media files
  eleventyConfig.addPassthroughCopy("public");

  // Create a collection for posts
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/posts/*.md");
  });

  // Create separate collections for fiction and documentaries
  eleventyConfig.addCollection("fiction", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("content/posts/*.md")
      .filter((item) => item.data.category === "fiction");
  });

  eleventyConfig.addCollection("documentary", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("content/posts/*.md")
      .filter((item) => item.data.category === "documentaire");
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
