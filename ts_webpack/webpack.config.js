// 引入一个包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    mode: 'production',
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境插件
                                    '@babel/preset-env',
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            'chrome': '58',
                                            'ie': '11'
                                        },
                                        // 指定core.js的版本
                                        'corejs': '3',
                                        // 使用core.js的方式 'usage' 表示按需加载
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            /*title: '这是一个自定义的title'*/
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}

