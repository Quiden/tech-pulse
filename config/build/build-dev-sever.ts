import webpack from "webpack";

export const buildDevServer = (port: number): webpack.Configuration["devServer"] => {
    return {
        port,
        historyApiFallback: true,
    }
}