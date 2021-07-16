const path = require('path');


module.exports = function override(config, env) {
    config.module.rules.push({
        
        test: /\.(js|jsx)$/,
        include: [/node_modules\/pdfjs-dist/, /src\//],
        use: {
            loader: "babel-loader",
            query: {
                presets: ["@babel/preset-env"],
                plugins: ["babel-plugin-transform-class-properties"]
            }
        }, 

    });
    return config;
  }