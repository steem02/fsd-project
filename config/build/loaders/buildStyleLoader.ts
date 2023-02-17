import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildStyleLoader = (isDev: boolean) => ({
  test: /\.(sa|sc|c)ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => resPath.includes('.module.'),
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
