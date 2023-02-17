import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';

export default (config: webpack.Configuration) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: '',
    assetModuleFileName: path.join('images', '[name].[contenthash][ext]'),
  };

  // config.module?.rules?.push(styleLoader(true));

  // config.module?.rules?.map()

  return config;
};
