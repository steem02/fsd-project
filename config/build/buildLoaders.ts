import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	const imagesLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: "asset/resource",
	};

	const svgLoader = [
		{
			test: /\.svg$/i,
			type: "asset",
			resourceQuery: /url/, // *.svg?url
		},
		{
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
			use: ["@svgr/webpack"],
		},
	];

	const cssLoader = {
		test: /\.(sa|sc|c)ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes(".module."),
						localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};
	return [typescriptLoader, cssLoader, imagesLoader, ...svgLoader];
}
