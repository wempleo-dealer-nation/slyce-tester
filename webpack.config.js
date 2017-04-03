const config = {
    context: __dirname + '/js',
    entry: {
        app: __dirname + '/js/app.js'
    },
    output: {
        path: __dirname + '/build',
        // publicPath: '/build/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;