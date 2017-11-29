var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/entry.js'
    },
    output: {
        filename: '[name].js',
        library: 'bassoon',
        libraryTarget: 'var',
        path: path.resolve(__dirname, './public/js'),
        publicPath: '/public/js',
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env'],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
else {
    module.exports.devtool = '#source-map'
}