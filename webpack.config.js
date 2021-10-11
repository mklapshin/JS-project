module.exports = {
    entry: './js/index.js',
    module: {
       rules: [
         { test: /\.svg$/, use: 'svg-inline-loader' },
         { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
         { test: /\.(js)$/, use: 'babel-liader' }
        ]
    }
}