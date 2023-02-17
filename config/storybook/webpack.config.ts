import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    assetModuleFileName: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules.map((rule) => {
      if (rule !== '...' && rule?.test?.toString().includes('svg')) {
        return { ...rule, exclude: [/.svg$/i] };
      }

      return rule;
    });
  }

  config.module?.rules?.push(buildStyleLoader(true), ...buildSvgLoader(true));

  return config;
};
