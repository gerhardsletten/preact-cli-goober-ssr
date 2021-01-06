# Preact cli Goober SSR

Preact CLI plugin to run [Goobers `extractCss` method](https://github.com/cristianbote/goober#extractcsstarget) on prerendered pages.

## Usage

``` bash
# preact.config.js
const gooberPlugin = require('preact-cli-goober-ssr')

export default (config, env) => {
  gooberPlugin(config, env)
}
```