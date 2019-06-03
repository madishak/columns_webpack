const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        page: './src/page.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
           rules: [
          {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
       }
     ]
   }
};