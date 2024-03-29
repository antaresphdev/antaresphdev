module.exports = {
  pages: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/pages/*.html",
      "src/collections/pages/*.njk",
      "src/collections/pages/*.md",
    ])
  },

  posts: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/posts/*.html",
      "src/collections/posts/*.njk",
      "src/collections/posts/*.md",
    ])
  },

  tags: function (collections) {
    const posts = collections.getFilteredByGlob([
      "src/collections/posts/*.html",
      "src/collections/posts/*.njk",
      "src/collections/posts/*.md",
    ])

    let allTags = []
    posts.map(post => {
      const { tags } = post.data
      tags.forEach(tag => allTags.push(tag))
    })

    const uniqueTags = Array.from(new Set(allTags))
    const tagCollection = uniqueTags.map(tag => ({ data: { title: tag } }))

    return tagCollection;
  },

  videos: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/videos/*.html",
      "src/collections/videos/*.njk",
      "src/collections/videos/*.md",
    ])
  },

  infographics: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/infographics/*.html",
      "src/collections/infographics/*.njk",
      "src/collections/infographics/*.md",
    ])
  },

  about: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/about/*.html",
      "src/collections/about/*.njk",
      "src/collections/about/*.md",
    ])
  },
}