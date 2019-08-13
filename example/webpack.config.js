const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');


if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('./build/')
    .setPublicPath('/')

    .addEntry('app', './src/index.js')

    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .addPlugin(new HtmlWebpackPlugin({template: './src/index.html.ejs'}))
    .configureBabel(
        babelConfig => {
            babelConfig.plugins.push('@babel/plugin-proposal-class-properties');
        },
        {
            useBuiltIns: 'usage',
            corejs: 3
        }
    )
;

module.exports = Encore.getWebpackConfig();
