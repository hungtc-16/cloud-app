const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {
        sass: {
            loaderOptions: (sassLoaderOptions, { env, paths }) => {
                return sassLoaderOptions;
            },
        },
        postcss: {
            mode: 'extends' || 'file',
            plugins: [require('postcss')],
            plugins: (plugins) => [require('postcss')].concat(plugins),
            env: {
                stage: 3,
            },
            loaderOptions: (postcssLoaderOptions, { env, paths }) => {
                return postcssLoaderOptions;
            },
        },
    },
    webpack: {
        alias: {
            "~": path.resolve(__dirname, "src"),
        },
    },
    typescript: {
        enableTypeChecking: true,
    },
};

