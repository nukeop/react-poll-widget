import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  devtool: 'source-map',
  module: {
    rules: [
    {
       test: /\.(js|jsx|tsx|ts)$/,
       loader: 'ts-loader',
       include: [
         path.resolve(__dirname, 'src'),
         /ui\/src/
       ],
        exclude: [
          /node_modules/,
         path.resolve(__dirname, 'src', 'tests')
       ]
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  externals: {
    react: 'react',
  }
};

export default config;