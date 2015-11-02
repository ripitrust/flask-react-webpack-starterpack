

var path = require('path');
var outpath = __dirname + "/dist/";


module.exports = {

    entry: ["./src/index.js", "./css/fixed-data-table.css","./css/main.css"],
    output: {
        path: outpath,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test : /\.js$/,include: path.join(__dirname, 'src'), loader: "babel"},
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};