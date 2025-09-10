const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true, // Suppress deprecation warnings from dependencies
                verbose: false
              }
            }
          }
        ]
      }
    ]
  }
};
