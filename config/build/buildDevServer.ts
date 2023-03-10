import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(option: BuildOptions): DevServerConfiguration {
  return {
    port: option.port,
    historyApiFallback: true,
    open: true,
    hot: true,
  };
}
