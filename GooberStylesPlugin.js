const { extractCss } = require('goober')

class GooberStylesPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('GooberStylesPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(
        'GooberStylesPlugin',
        (data) => {
          data.html = data.html.replace(
            '</head>',
            `<style id="_goober">${extractCss()}</style></head>`
          )
        }
      )
    })
  }
}

module.exports = GooberStylesPlugin
