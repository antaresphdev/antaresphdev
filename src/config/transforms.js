const prettier = require('prettier')
const path = require('path')

module.exports = {
  prettier: (content, outputPath) => {
    if (outputPath.includes('assets'))
      return content

    console.log("[PRETTIER] Transforming", outputPath)
    const extname = path.extname(outputPath)
    switch (extname) {
      case '.html':
      case '.json':
        const parser = extname.replace(/^./, "")
        return prettier.format(content, { parser, singleAttributePerLine: false, printWidth: 100 })
      default:
        return content
    }
  }
}