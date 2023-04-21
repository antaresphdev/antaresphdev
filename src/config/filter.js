const fs = require('fs')
const fetch = require('@11ty/eleventy-fetch')
const parse = require("node-html-parser").parse

module.exports = {
  markdown: function (value) {
    let markdown = require('markdown-it')({ html: true })

    return markdown.render(value)
  },
  icon: function (value) {
    return `<svg class="feather" aria-hidden="true"><use href="/assets/images/feather-sprite.svg#${value}" /></svg>`
  },
  humanReadableDate: function (value) {
    let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })
    return formatter.format(value)
  },
  machineReadableDate: function (value) {
    return new Date(value).toISOString()
  },
  year: function (value) {
    return new Date().getFullYear()
  },
  keys: function (obj) {
    return Object.keys(obj)
  },
  values: function (obj) {
    return Object.values(obj)
  },
  notHidden: function (object) {
    return Object.keys(object).filter(key => !object[key].hidden).map(key => object[key])
  },
  tags: function (collection) {
    let allTags = []
    collection.map(post => {
      const { tags } = post.data
      tags.forEach(tag => allTags.push(tag))
    })

    return Array.from(new Set(allTags))
  },
  filterByTags: function (collections, tag) {
    return collections.filter(post => post.data.tags.includes(tag.data.title))
  },
  removeInvalidAtomTags: function (html) {
    const invalidTagRegex = /\&lt;(script|style).*\&lt;\/(script|style)&gt;/gm
    return html.replace(invalidTagRegex, '')
  },
  guidesAsCollection: function (directory) {
    return fs.readdirSync(directory)
  },
  metatags: {
    isAsync: true,
    function: async function (url) {
      const html = await fetch(url, { duration: '0s', type: 'text' })
      const document = parse(html)
      const rawMeta = {}
      rawMeta.title = document.querySelector('title').innerText;

      const metaTags = [...document.querySelectorAll('meta')]
      metaTags.forEach(meta => {
        if (meta.hasAttribute('name')) {
          rawMeta[meta.getAttribute('name')] = meta.getAttribute('content')
        }

        if (meta.hasAttribute('property')) {
          rawMeta[meta.getAttribute('property')] = meta.getAttribute('content')
        }
      })

      metadata = {
        title: rawMeta.title,
        description: rawMeta.description,
        url,
        image: rawMeta['og:image']
          ? rawMeta['og:image']
          : rawMeta['twitter:image']
            ? rawMeta['twitter:image']
            : null,
        themeColor: rawMeta['theme-color']
      }

      return metadata
    }
  }
}