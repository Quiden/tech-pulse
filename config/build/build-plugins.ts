import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/webpack";

export const buildPlugins = (htmlPath: BuildPaths["html"]): webpack.Configuration["plugins"] => {
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
  ];
};
