import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin({
			handler: (percentage) => {
				process.stdout.write(`Progress: ${(percentage * 100).toFixed(0)}%\r`);
			},
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__DEV__: isDev,
		}),
	];

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	return plugins;
}
