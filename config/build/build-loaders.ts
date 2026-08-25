import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    loader: 'swc-loader',
    options: {
      jsc: {
        target: 'esnext',
        parser: { syntax: 'typescript', tsx: true },
        transform: {
          react: {
            runtime: 'automatic',
            development: isDev,
            refresh: isDev,
          },
        },
      },
    },
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.css$/,
            namedExport: false,
            exportLocalsConvention: 'as-is',
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff(2)?|eot|ttf|otf)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [tsLoader, cssLoader, svgLoader, fileLoader];
};
