const stylus = require('stylus');
const rupture = require('rupture');

module.exports = {
    preprocess: {
        style: async ({ content, attributes }) => {
            if (attributes.lang !== 'stylus') return;

            return new Promise((resolve, reject) => {
                var style = stylus(content)
                    .use(rupture())
                    .set('sourcemap', true);

                style.render((error, css) => {
                    if (error) return reject(error);
                    resolve({
                        code: css,
                        map: style.sourcemap,
                        dependencies: style.deps(),
                    })
                });
            });
        },
    },
};
