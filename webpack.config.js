const webpack = require('webpack')

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/,exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader?modules'},
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ["antd",  { "style": "css" }]]
    },
    plugins: [

    ],
    devServer: {
        contentBase: './',
        port: '9000',
        historyApiFallback: true
    }
}