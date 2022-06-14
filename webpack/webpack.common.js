const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../', './src/index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../', './build'),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // using import without file-extensions
    plugins: [
      new TsconfigPathsPlugin({ 
        configFile: path.resolve(__dirname, '../', './tsconfig.json')
      }), // plugin makes mapping from tsconfig.json to weback:alias
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, // we don't type checking during the compilation - it's task for CodeEditor
            },
          }
        ],
      },
      {
        test: /\.css$|\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', './src/index.html'),
      templateParameters(compilation, assets, options) {
        return {
          compilation: compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: options
          },
          process,
        };
      },
    }),
  ],
}