import autoPreprocess from 'svelte-preprocess'
const preprocess = require('svelte-preprocess')

module.exports = {
  preprocess: preprocess({autoPreprocess({})}),
}
