var path = require("path");
module.exports={
    entry: ['whatwg-fetch', './js/in.jsx'],
    output: { filename: "../dist/out.js", path: path.resolve(__dirname, "js") },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/, exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: { presets: ["es2015", "stage-2", "react"] }
            }
        }]
    }
}