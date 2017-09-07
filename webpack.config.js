const webpack = require('webpack'),
         path = require('path');

const config = {
    entry: './client/index.js',
    output: { 
        path: path.resolve(__dirname, 'public'), 
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: [/\.png$/, /\.jpg$/, /\.svg$/],
                loader: 'url-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;