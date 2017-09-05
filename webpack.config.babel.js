import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import path from 'path';

module.exports = {
    externals: [nodeExternals()],
    entry: './index.js',
    output: { 
        path: path.resolve(__dirname), 
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};