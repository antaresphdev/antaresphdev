const fs = require('fs')
const path = require('path')

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
  }
}