const markdown = require('markdown-it')
const mdAnchor = require('markdown-it-anchor')

const config = require('./src/config/index');
const { passthrough, collections, filters, plugins, watchtargets, transforms } = config

module.exports = function (eleventy) {

  Object.keys(passthrough).forEach(key => eleventy.addPassthroughCopy(passthrough[key]()))
  Object.keys(collections).forEach(key => eleventy.addCollection(key, collections[key]))
  Object.keys(watchtargets).forEach(key => eleventy.addWatchTarget(watchtargets[key]()))
  Object.keys(transforms).forEach(key => eleventy.addTransform(key, transforms[key]))

  Object.keys(filters).forEach(key => {
    const filter = filters[key]

    console.log("[FILTERS] Adding filter:", key, filter.isAsync ? "(Async)" : "")
    if (filter.isAsync) {
      eleventy.addAsyncFilter(key, filters[key].function)
    } else {
      if (filters[key].function != null)
        eleventy.addFilter(key, filters[key].function)
      else
        eleventy.addFilter(key, filters[key])
    }

  })

  let envIsProduction = process.env.ELEVENTY_ENV === 'production'
  Object.keys(plugins).forEach(key => {
    let { options, isProduction, plugin } = plugins[key]()
    let shouldAddPlugin = false

    if (isProduction) {
      shouldAddPlugin = envIsProduction
    } else {
      shouldAddPlugin = true
    }

    if (shouldAddPlugin) {
      if (options) {
        eleventy.addPlugin(plugin, options)
      } else {
        eleventy.addPlugin(plugin)
      }
    }
  })

  eleventy.addGlobalData('generated', () => new Date().toISOString())
  eleventy.setBrowserSyncConfig({ open: true })

  const mdLib = markdown({ html: true, linkify: true, typographer: true })
  mdLib.use(mdAnchor)
  mdLib.use(require('markdown-it-deflist'))
  mdLib.use(require('markdown-it-abbr'))
  mdLib.use(require('markdown-it-footnote'))
  mdLib.use(require('markdown-it-attrs'))
  mdLib.disable('code')
  eleventy.setLibrary('md', mdLib)

  return {
    dir: {
      input: 'src',
      output: 'public',
      includes: 'templates/components',
      layouts: 'templates/layouts',
      data: 'data'
    },
    templateFormats: ['njk', 'md', '11ty.js', 'html']
  }
}