module.exports = {
  syntaxHighlight: () => ({ plugin: require('@11ty/eleventy-plugin-syntaxhighlight') }),
  timeToRead: () => ({
    plugin: require('eleventy-plugin-time-to-read'),
    options: {
      output: data => {
        const includeHours = data.hours != null
        const includeMinutes = data.minutes != null && !includeHours
        let hours = includeHours ? `${data.hours} hour` : ''
        let minutes = includeMinutes ? `${data.minutes} minute` : ''

        const timing = [hours, minutes].filter(s => s.length > 0)
        const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

        return `${listFormatter.format(timing)} read`
      }
    }
  }),
  toc: () => ({
    plugin: require('eleventy-plugin-toc'),
    options: {
      wrapperClass: 'article__toc-list',
      tags: ['h2']
    }
  }),
  rss: () => ({ plugin: require('@11ty/eleventy-plugin-rss') }),
  render: () => ({ plugin: require('@11ty/eleventy').EleventyRenderPlugin })
}