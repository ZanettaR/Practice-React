var ClosureCompilerPlugin = require('webpack-closure-compiler');
var path = require('path')


module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        // hot: true,
        host: '0.0.0.0',
        historyApiFallback: {
            index: '/example/index.html'
        },
    },
    entry: {
        main: ["./src/index.tsx"]
        
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    output: {
        filename: "index.js",
    },
    module: {
        rules:[
         { test: /\.json$/, loader: 'json-loader' },
         { 
             test: /\.tsx?$/,
             use: ['react-hot-loader', 'ts-loader'] 
         },
         {  
             test: /\.css$/,
             use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    sourceMap: true,
                    minimize: true,
                    importLoaders: 2,
                    localIdentName: '[local]',
                    includePaths: [
                        path.resolve(__dirname, './node_modules')
                    ]
                }
             }
           ]
         }
       ]
    },
    plugins: [
      
    ]
};
