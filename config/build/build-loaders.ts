import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
            loader: "ts",
            target: "esnext",
        },
        exclude: /node_modules/,
    }

    return [
        tsLoader,
    ];
}