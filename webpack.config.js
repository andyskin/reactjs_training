const HtmlWebpackPlugin = require('html-webpack-plugin'),
                webpack = require('webpack'),
                path = require('path');
         
const config = {
    entry: './client/index.js',
    output: { 
        path: path.resolve(__dirname, 'dist'), 
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
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    collapseWhitespace: true
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            hash: true
        }),
        
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;