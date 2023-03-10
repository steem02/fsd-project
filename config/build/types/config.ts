export enum BuildMode {
  production = 'production',
  development = 'development',
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  assetModuleFileName: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
