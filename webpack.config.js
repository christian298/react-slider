module.exports = {
    entry: "./src/js/app.jsx",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: "jsx-loader?harmony"},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
        ]
    }
}
