import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    loader: "esbuild-loader",
    options: {
      target: "esnext",
    },
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.css$/,
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
    ],
  };

  return [tsLoader, cssLoader];
};
