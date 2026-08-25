import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = (
  htmlPath: BuildPaths["html"],
  isDev: boolean,
): webpack.Configuration["plugins"] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    ...(isDev ? [new ReactRefreshWebpackPlugin({ overlay: false })] : []),
  ];
};
