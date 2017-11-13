const htmlPlugin = require('html-webpack-plugin'),
      copyPlugin = require('copy-webpack-plugin'),
         webpack = require('webpack'),
            path = require('path');
         
const config = {
    devtool: 'cheap-source-map',
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
                    presets: [
                        ['env', {
                            'browsers': ['last 2 versions', 'chrome >= 60'],
                            'debug': true
                        }],
                        'stage-0',
                        'react'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'file-loader'
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
        // ,

        // new copyPlugin([
        //     { from: 'public' }
        // ])
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            }
        })
    );
}

module.exports = config;