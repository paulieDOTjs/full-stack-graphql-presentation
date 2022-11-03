import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv";
import { Configuration, DefinePlugin } from "webpack";
import { resolve } from "path";

type WebpackOptions = {
  mode?: "development" | "production";
};

export default (
  _env: Record<string, string>,
  options: WebpackOptions
): Configuration & { devServer: any } => {
  const { parsed: env, error } = dotenv.config({
    path: `./${options.mode ?? "development"}.env`,
  });

  if (error) {
    console.warn("unable to read env files", error);
  }

  return {
    entry: resolve(__dirname, "./src/index.tsx"),
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "main/[name].bundle.js",
      assetModuleFilename: "main/assets/[hash][ext][query]",
      clean: true,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["ts-loader"],
        },
        {
          test: /\.module\.s?css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-modules-typescript-loader",
              options: {
                mode: process.env.CI ? "verify" : "emit",
              },
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName:
                    options.mode === "development"
                      ? "[name]__[local]__[hash:base64:5]"
                      : "[hash:base64:5]",
                },
              },
            },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.s?css$/,
          exclude: /\.module\.s?css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
        { test: /\.svg$/, use: ["react-svg-loader"] },
        { test: /\.less$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/fonts/",
              },
            },
          ],
        },
      ],
    },

    devtool: "source-map",
    resolve: {
      extensions: [".css", ".json", ".tsx", ".ts", ".jsx", ".js"],
    },
    optimization: {
      runtimeChunk: "single",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./template.html",
      }),
      new DefinePlugin({
        "process.env": JSON.stringify({ ...env, ..._env }),
      }),
    ],
  };
};
