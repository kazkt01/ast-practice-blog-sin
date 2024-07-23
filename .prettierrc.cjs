module.exports = {
  pluings: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
          parser: "astro"
      }
    }
  ]
}

