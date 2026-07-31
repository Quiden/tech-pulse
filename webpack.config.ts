import path from "node:path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/build-webpack-config";
import {BuildEnv} from "./config/build/types/config";

export default (env: BuildEnv): webpack.Configuration => {
    return buildWebpackConfig({
        mode: env.mode || 'development',
        paths: {
            entry: path.resolve(__dirname, "src", "index.ts"),
            build: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html"),
        },
        isDev: env.mode === 'development',
        port: env.port || 3000,
    });
}