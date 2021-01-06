const GooberStylesPlugin = require('./GooberStylesPlugin')

function preactCliGooberPlugin(config, env) {
  if (!env.dev) {
    if (env.ssr) {
      // Make goober external in the ssr-build to be able to extract collected styles
      config.externals['goober'] = 'goober'
    }
    if (!env.ssr) {
      // Only insert plugin on client build
      config.plugins.push(
        new GooberStylesPlugin()
      )
    }
  }
}

module.exports = preactCliGooberPlugin
