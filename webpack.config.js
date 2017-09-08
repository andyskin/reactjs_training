const htmlPlugin = require('html-webpack-plugin'),
         webpack = require('webpack'),
            path = require('path');
         
const config = {
    entry: {
        app: './client/index.js',
        vendor: ['react', 'react-dom']
    },
    output: { 
        path: path.resolve(__dirname, 'dist'), 
        filename: "[name].js"
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            chunks: ['vendor', 'app']
        }),

        new htmlPlugin({
            template: './client/index.html',
            hash: true
        }),
        
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true
            }
        })
    );
}

module.exports = config;