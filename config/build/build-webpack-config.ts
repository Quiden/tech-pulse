import webpack from 'webpack';

import { buildDevServer } from './build-dev-sever';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev, port } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths.src),
    plugins: buildPlugins(paths.html, isDev),
    devServer: isDev ? buildDevServer(port) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  };
};
