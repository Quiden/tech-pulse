import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import {BuildPaths} from "./types/config";

export const buildPlugins = (htmlPath: BuildPaths['html']): webpack.Configuration["plugins"] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: htmlPath,
        }),
    ];
}