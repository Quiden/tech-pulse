import path from 'path';
import webpack from 'webpack';

export const buildResolvers = (srcPath: string): webpack.Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcPath, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@common': path.resolve(srcPath, 'common'),
      '@modules': path.resolve(srcPath, 'modules'),
      '@pages': path.resolve(srcPath, 'pages'),
    },
  };
};
