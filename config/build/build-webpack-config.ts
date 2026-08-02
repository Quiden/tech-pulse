import {BuildOptions} from "./types/config";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildPlugins} from "./build-plugins";
import webpack from "webpack";
import {buildDevServer} from "./build-dev-sever";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev, port} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            publicPath: "/",
            clean: true,
        },
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(paths.html),
        devServer: isDev ? buildDevServer(port) : undefined,
        devtool: isDev ? "inline-source-map" : undefined,
    }
}