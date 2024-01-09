var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            _components:path.resolve(__dirname, './src/_components'),
            _constants :path.resolve(__dirname, './src/_constants'),
            _helpers:path.resolve(__dirname, './src/_helpers'),
            _models:path.resolve(__dirname, './src/_models'),
            _translations:path.resolve(__dirname, './src/_translations')
          }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}