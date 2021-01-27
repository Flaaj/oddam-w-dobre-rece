const path = require("path");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        open: true,
        // host: "192.168.9.111",
        // host: "192.168.43.222",
        // https: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: "url-loader?limit=100000",
            },
        ],
    },
};
